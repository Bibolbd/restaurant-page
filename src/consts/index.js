const menu = [
  {
    name: "Tonkotsu Ramen",
    description:
      "Rich and creamy pork bone broth with tender chashu pork slices.",
    price: 12.99,
    spicy: false,
    vegetarian: false,
  },
  {
    name: "Shoyu Ramen",
    description:
      "Classic soy-based broth with flavorful toppings and thin noodles.",
    price: 11.99,
    spicy: false,
    vegetarian: false,
  },
  {
    name: "Miso Ramen",
    description:
      "Hearty miso-flavored broth with bean sprouts, corn, and marinated bamboo shoots.",
    price: 12.49,
    spicy: false,
    vegetarian: false,
  },
  {
    name: "Spicy Ramen",
    description:
      "Fiery and flavorful ramen with a spicy broth, topped with sliced pork and green onions.",
    price: 13.99,
    spicy: true,
    vegetarian: false,
  },
  {
    name: "Vegetable Ramen",
    description:
      "Delicious vegetarian ramen with a variety of fresh vegetables in a savory broth.",
    price: 10.99,
    spicy: false,
    vegetarian: true,
  },
  {
    name: "Chicken Ramen",
    description:
      "Savory chicken broth with tender chicken slices, bamboo shoots, and nori seaweed.",
    price: 11.99,
    spicy: false,
    vegetarian: false,
  },
];

const contactInfo = {
  name: "Ramen Master",
  address: "123 Sakura Street, Tokyo",
  phone: "+1 123-456-7890",
  email: "info@ramenmaster.com",
  website: "www.ramenmaster.com",
};

export default {
  menu,
  contactInfo,
};
