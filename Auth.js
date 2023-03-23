const authBtn  = document.querySelector(".auth-btn");
const CLIENT_ID = "a787e9c6fba0418ba289ea9a1831dd8a";
const REDIRECT_URL = "https://spotify-playlist-gen-v2.vercel.app/#";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"
const SCOPES = [
  "playlist-modify-public",
  "streaming",
  "user-library-read",
  "playlist-modify-private",
  "user-read-currently-playing",
  "playlist-read-private",
  "user-modify-playback-state",
  "user-read-playback-state",
];
const SCOPES_DEL = "%20";
const SCOPES_URL = SCOPES.join(SCOPES_DEL);

authBtn.addEventListener("click", async function(e) {
  e.preventDefault();
  window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPES_URL}&response_type=token&show_dialog=true`;
})