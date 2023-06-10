import ramenLogo from "../assets/logo.png";
import '../styles/index.css'

function header() {
  const nav = document.createElement("nav");
  const logo = new Image();
  const navItems = document.createElement("div");
  const navItemHome = document.createElement("a");
  const navItemMenu = document.createElement("a");
  const navItemContact = document.createElement("a");

  navItemHome.id = "navItemHome";
  navItemMenu.id = "navItemMenu";
  navItemContact.id = "navItemContact";

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

  return nav
}

export default header;
