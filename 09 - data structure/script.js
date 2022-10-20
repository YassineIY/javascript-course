"use strict";

const restaurant = {
  name: "clasico italiano",
  location: "ha wahd adress kima kan",
  categories: ["Italian", "pizza", "keskso"],
  starterMenu: ["starter one", "starter two", "starter three"],
  mainMenu: ["main one", "main two", "main three"],
};

const array = [2, 3, 4];

const a = array[0];
const b = array[1];
const c = array[2];

const [x, y, z] = array;

console.log(x, y, z);
console.log(array);

const [lowl,tani] = restaurant.categories;
console.log(lowl,tani);