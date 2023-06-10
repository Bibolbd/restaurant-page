import "../styles/contact.css";
import "../styles/index.css";
import ramenLogo from "../assets/logo.png";
import ramen from "../assets/ramen.png";
import { contactInfo } from "../consts";

function contact() {
  const content = document.querySelector("#content");

  //navigation bar
  const nav = document.createElement("nav");
  const logo = new Image();
  const navItems = document.createElement("div");
  const navItemHome = document.createElement("p");
  const navItemMenu = document.createElement("p");
  const navItemContact = document.createElement("p");

  logo.src = ramenLogo;
  navItemHome.textContent = "home";
  navItemMenu.textContent = "menu";
  navItemContact.textContent = "contact";

  navItemHome.classList.add("navItem");
  navItemMenu.classList.add("navItem");
  navItemContact.classList.add("navItem");
  navItems.classList.add("navItems");
  nav.classList.add("navigation");

  nav.appendChild(logo);
  nav.appendChild(navItems);
  navItems.appendChild(navItemHome);
  navItems.appendChild(navItemMenu);
  navItems.appendChild(navItemContact);

  content.appendChild(nav);

  //main content
  const main = document.createElement("main");
  const image = new Image();
  const section = document.createElement("section");
  const oishi = document.createElement("h1");

  image.src = ramen;
  oishi.textContent = "おいしい!";

  image.classList.add("image");
  oishi.classList.add("oishi");
  main.classList.add("main");
  section.classList.add("section");

  section.appendChild(oishi);

  const keys = Object.keys(contactInfo);
  keys.map((key) => {
    const label = document.createElement("h1");
    const text = document.createElement("p");
    const container = document.createElement("div");

    label.textContent = contactInfo[key].label;
    text.textContent = contactInfo[key].text;

    label.classList.add("label");
    text.classList.add("text");
    container.classList.add("container");

    container.appendChild(label);
    container.appendChild(text);
    section.appendChild(container);
  });

  main.appendChild(image);
  main.appendChild(section);

  content.classList.add("content");

  content.appendChild(main);
}

export default contact;
