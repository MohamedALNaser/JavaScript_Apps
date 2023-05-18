let tilte = document.querySelector(".title");
let ul = document.querySelector("ul");
let reload = document.querySelector(".reload");

function offline() {
  tilte.innerHTML = "Offline Now";
  tilte.style.color = "red";
  ul.classList.remove("hide");
  reload.classList.remove("hide");
}

function online() {
  title.innerHTML = "Online Now";
  title.style.color = "green";
  ul.classList.add("hide");
  reload.classList.add("hide");
}
window.onload = () => {
  if (window.navigator.onLine) {
    online();
  } else {
    offline();
  }
};
window.addEventListener("online", () => {
  online();
});
window.addEventListener("offline", () => {
  offline();
});
reload.addEventListener("click", () => {
  window.location.reload();
});
