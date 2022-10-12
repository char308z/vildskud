import "./style.css";

import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

const burgermenu = document.querySelector("input[type=checkbox]");

burgermenu.addEventListener("change", showNav);

function showNav() {
  if (this.checked) {
    document.querySelector("#burgerContent").classList.remove("hide");
  } else {
    document.querySelector("#burgerContent").classList.add("hide");
  }
}

function ingenforestillinger() {
  const skjulteforestillinger = document.querySelectorAll(
    ".forestilling.hidden"
  ).length;
  if (skjulteforestillinger === 7) {
    document.querySelector("#ingenforestillinger").classList.remove("hidden");
  } else {
    document.querySelector("#ingenforestillinger").classList.add("hidden");
  }
}
