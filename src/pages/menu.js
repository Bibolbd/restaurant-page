import "../styles/menu.css";
import "../styles/index.css";
import tonkotsu from "../assets/tonkotsu.jpg";
import chicken from "../assets/chicken.jfif";
import miso from "../assets/miso.jpg";
import shoyu from "../assets/shoyu.jpg";
import spicy from "../assets/spicy.jpg";
import vegetable from "../assets/vegetable.jpg";
import { menuItems } from "../consts/index.js";

function menu() {
  const content = document.querySelector("#content");
  content.classList.add("content")

  //display all ramen cards
  const keys = Object.keys(menuItems);
  keys.forEach((key) => {
    const cardContainer = document.createElement("div");
    const image = new Image();
    const name = document.createElement("p");
    const price = document.createElement("p");
    const description = document.createElement("p");
    const namePrice = document.createElement("div");
    const nameDesc = document.createElement("div");

    if (key == 0) image.src = tonkotsu;
    else if (key == 1) image.src = shoyu;
    else if (key == 2) image.src = miso;
    else if (key == 3) image.src = spicy;
    else if (key == 4) image.src = vegetable;
    else image.src = chicken;
    name.textContent = menuItems[key].name;
    price.textContent = menuItems[key].price;
    description.textContent = menuItems[key].description;

    image.classList.add("ramenImage");
    name.classList.add("name");
    price.classList.add("price");
    cardContainer.classList.add("cardContainer");
    namePrice.classList.add("namePrice");
    nameDesc.classList.add("nameDesc");
    description.classList.add("paragraph")

    namePrice.appendChild(name);
    namePrice.appendChild(price);
    nameDesc.appendChild(namePrice);
    nameDesc.appendChild(description);
    cardContainer.appendChild(image);
    cardContainer.appendChild(nameDesc);

    content.appendChild(cardContainer);
  });
}

export default menu;
