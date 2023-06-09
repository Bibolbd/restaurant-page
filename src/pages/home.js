import "../styles/home.css";
import ramenLogo from "../assets/logo.png";
import ramen from "../assets/ramen.png";

function home() {
  const content = document.querySelector("#content");

  //creating elements for navigation bar
  const nav = document.createElement("nav");
  const logo = new Image();
  const navItems = document.createElement("div");
  const navItemHome = document.createElement("p");
  const navItemMenu = document.createElement("p");
  const navItemContact = document.createElement("p");

  //creating elements for main content
  const main = document.createElement("main");
  const section = document.createElement("section");
  const headingRamen = document.createElement("p");
  const heading = document.createElement("p");
  const paragraph = document.createElement("p");
  const image = new Image();

  //assigning content of elements
  logo.src = ramenLogo;
  navItemHome.textContent = "home";
  navItemMenu.textContent = "menu";
  navItemContact.textContent = "contact";
  headingRamen.textContent = "ラーメン";
  heading.innerHTML =
    'A BOWL OF LOVE FROM<br><span style="color: var(--red);">JAPANESE CUISINE</span><br>FOR YOU';
  paragraph.innerHTML =
    "It is a long established fact that a reader will be distracted by the readable<br />content of a page when looking at its layout. The point of using Lorem<br />Ipsum is that it has a more-or-less no";
  image.src = ramen;

  //add class list to elements that need css
  navItemHome.classList.add("navItem");
  navItemMenu.classList.add("navItem");
  navItemContact.classList.add("navItem");
  navItems.classList.add("navItems");
  nav.classList.add("navigation");
  headingRamen.classList.add("heading");
  heading.classList.add("heading");
  paragraph.classList.add("paragraph");
  image.classList.add("mainImage");
  main.classList.add("main");
  section.classList.add("mainSection");

  //append elements to another elements
  nav.appendChild(logo);
  nav.appendChild(navItems);
  navItems.appendChild(navItemHome);
  navItems.appendChild(navItemMenu);
  navItems.appendChild(navItemContact);
  main.appendChild(section);
  main.appendChild(image);
  section.appendChild(headingRamen);
  section.appendChild(heading);
  section.appendChild(paragraph);
  content.appendChild(nav);
  content.appendChild(main);
}

export default home