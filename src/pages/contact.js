import "../styles/contact.css";
import "../styles/index.css";
import ramen from "../assets/ramen.png";
import { contactInfo } from "../consts";

function contact() {
  const content = document.querySelector("#content");

  //main content
  const main = document.createElement("main");
  const image = new Image();
  const section = document.createElement("section");
  const oishi = document.createElement("h1");

  image.src = ramen;
  oishi.textContent = "おいしい!";

  image.classList.add("mainImage");
  oishi.classList.add("oishi");
  main.classList.add("mainContact");
  section.classList.add("sectionContact");

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
  content.appendChild(main);
}

export default contact;
