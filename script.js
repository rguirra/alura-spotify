const searchInput = document.getElementById("search-input");
const resultArtists = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");

function getApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result));
}

function displayResults(result) {
  const artistName = document.getElementById("artist-name");
  const artistImage = document.getElementById("artist-img");

  result.forEach(element => {
    artistImage.src = element.urlImg;
    artistName.innerText = element.name;
  });

  resultArtists.classList.remove("hidden");
}

function hidePlaylists() {
  resultArtists.classList.add("hidden");
}

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    resultPlaylist.classList.add("hidden");
    resultArtists.classList.remove("hidden");
    return;
  }
  getApi(searchTerm);
});
