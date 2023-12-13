"use strict";
/* Global variables */
let shop = document.querySelector("#shop");

/* Data */
let shopItemsData = [
  {
    id: "one",
    name: "One food",
    price: "150",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img_1.png",
  },
  {
    id: "two",
    name: "Two food",
    price: "110",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img_2.png",
  },
  {
    id: "three",
    name: "Three food",
    price: "90",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img_3.png",
  },
  {
    id: "four",
    name: "Four food",
    price: "135",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img_4.png",
  },
];

let basket = [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      return `<div id = product-id-${id} class="item">
<img width="220" src=${img} alt="" />
<div class="details">
  <h3>${name}</h3>
  <p>${desc}</p>
  <div class="price_quantity">
    <h2>${price}</h2>
    <div class="buttons">
      <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
      <div id=${id} class="quantity">0</div>
      <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
    </div>
  </div>
</div>
</div>`;
    })
    .join(""));
};
generateShop();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  //console.log(basket);
  update(selectedItem.id);
};
let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  /* When there are 0 item in the basket than stop/return the function */
  if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  //console.log(basket);
  update(selectedItem.id);
};
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  console.log(search.item);

  document.getElementById(id).innerHTML = search.item;
  calculation();
};

/* Calculation */
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  //cartIcon.innerHTML = 100;
};
