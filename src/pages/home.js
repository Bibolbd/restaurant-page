import "../styles/home.css";
import "../styles/index.css";
import ramen from "../assets/ramen.png";

function home() {
  const content = document.querySelector("#content");

  //creating elements for main content
  const main = document.createElement("main")
  const section = document.createElement("section");
  const headingRamen = document.createElement("p");
  const heading = document.createElement("p");
  const paragraph = document.createElement("p");
  const image = new Image();

  //assigning content of elements
  headingRamen.textContent = "ラーメン";
  heading.innerHTML =
    'A BOWL OF LOVE FROM<br><span style="color: var(--red);">JAPANESE CUISINE</span><br>FOR YOU';
  paragraph.innerHTML =
    "It is a long established fact that a reader will be distracted by the readable<br />content of a page when looking at its layout. The point of using Lorem<br />Ipsum is that it has a more-or-less no";
  image.src = ramen;

  //add class list to elements that need css
  headingRamen.classList.add("headingRamen");
  heading.classList.add("heading");
  paragraph.classList.add("paragraph");
  image.classList.add("mainImage");
  section.classList.add("mainSection");
  main.classList.add("mainHome");

  //append elements to another elements
  section.appendChild(headingRamen);
  section.appendChild(heading);
  section.appendChild(paragraph);
  main.appendChild(section);
  main.appendChild(image);

  content.appendChild(main)
}

export default home;
