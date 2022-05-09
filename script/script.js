//menu
document.querySelector(".navbar__mobile").addEventListener("click", toggle);
function toggle() {
  document.querySelector("#responsive-menu").style.display = "block";
}
document.querySelector("#close").addEventListener("click", close);
function close() {
  document.querySelector("#responsive-menu").style.display = "none";
}
