import home from "./pages/home.js";
import menu from "./pages/menu.js";
import contact from "./pages/contact.js";
import { render } from "./functions/render.js";
import firstLoad from "./functions/firstLoad.js";

firstLoad()

document.querySelector("#navItemHome").addEventListener("click", () => {
  render();
  home();
});

document.querySelector("#navItemMenu").addEventListener("click", () => {
  render();
  menu();
});

document.querySelector("#navItemContact").addEventListener("click", () => {
  render();
  contact();
});
