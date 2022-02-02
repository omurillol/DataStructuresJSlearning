'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {

  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
 
  openingHours,

  order(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({starterIndex = 1, mainIndex = 0, address, time = '20:00'}){
    console.log(`Order received! ${this.starterMenu
    [starterIndex]} and ${this.mainMenu
    [mainIndex]} will be delivered to ${address} at ${time}`);
  },

  //function não precisa mais de "function:" modificação feita nessa função e nas 2 acima.
  orderPasta(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta. Made with ${ing1}, ${ing2} and ${ing3}.`);
  },
  //!Mas o jeito antigo é melhor, deixa mais explícito que é uma função
  orderPizza :function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

 
};


//!OPTIONAL CHAINING OPERATOR
if(restaurant.openingHours && restaurant.
openingHours.mon)
  console.log (restaurant.openingHours.mon.open);

//INSTEAD OF USING THOSE IFS ETC, WE DO IT
//WITH OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
//example

const days =["mon", "tue", "wed" , "thu", "fri", "sat", "sun"];

for(const day of days){
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

//example using methods
console.log(restaurant.order?.(0,1) ?? "Method does not exist");

//example using arrays
const array = [{name: "Murillo", email: "murillodev@protonmail.com"}];

console.log(array[0]?.name ?? "user array empty");

if(array.length >0 ) console.log(array[0].name);
else console.log("User array empty");

/*
//!FOR OF LOOP
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu) console.log(item);

for(const [i, el] of menu.entries()){
  console.log(`${i + 1}: ${el}`);
}

//?está usando "menu.entries()", que retorna objetos com um index na frente. Por isso, no local do "i" aparece um número.

//console.log([...menu.entries()]);





// Coding Challenge #1
// We're building a football betting app!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored
// GOOD LUCK 


//!CHALLENGE1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//I.
const [players1, players2] = game.players;
console.log(players1, players2);

//II.
const [gk, ...fieldplayers] =players1;
console.log(gk, fieldplayers);

//III.
const allPlayers = [...players1, ...players2];

//IV
const players1Final = [...players1, 'Tiago', 'Coutinho', 'Periscic'];

//V
const {odds: {team1, x: draw, team2}} =game;
console.log(team1, draw, team2);

//VI 

const printGoals= function(...players){
  console.log(`${players.length} goals were scored.`);
}

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');

printGoals(...game.scored);

players1.forEach(element => {
  console.log(element);
});

//VII

team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");

//OR assignment operator = assigns a value to a variable if it is falsy
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||=10;
// rest2.numGuests ||=10;
const rest1 ={
  name: "Capri",
  //numGuests : 20,
  numGuests:0,
}

const rest2 ={
  name: "La Piazza",
  owner: "Giovanni Rossi",
}

//Nullish assignment operator ( null or undefined )
rest1.numGuests ??=10;
rest2.numGuests ??=10;

//AND assisngment operator
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";

rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";


console.log(rest1, rest2);



//Nullish Coalescing
restaurant.numGuests = 0;

const guests =  restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

//Short Circuiting

 //--> Returns falsy
console.log(3 || "Murillo");
console.log("" || "Murillo");
console.log(true || 0);
console.log(undefined || null);


const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guests1);


console.log("-------AND-------");
console.log(0 && "Murillo");

console.log(23 &&"Murillo" && 12 && null);

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');



//REST

//1) Destructuring

//spread, because it's on the right side of the assignment operator(=)
const arr = [1,2, ...[3,4]];


//rest operator, left side of the assignment methot(=)
const [a, b, ...others] = [1, 2, 3, 4, 5];

const [pizza, , risotto, ...otherfood]=[...restaurant.mainMenu, restaurant.starterMenu];

console.log(pizza, risotto, otherfood);

//Object

const {sat, ...weekdays1} = restaurant.openingHours;
console.log(weekdays1);


//2)Functions
const add = function(...numbers){
  let sum = 0;

  for(let i = 0; i< numbers.length; i++ ) sum+= numbers [i];

  console.log(sum);
}


add(1, 2);
add(3, 7, 8, 6);
add(4, 8, 6, 1, 4, 6, 5, 9);

const x = [23, 5, 7];
add(...x);


restaurant.orderPizza('mushrooms', 'onions', 'spinach');


//THE SPREAD OPERATOR
restaurant.orderDelivery({
  time: '22:30',
  address: 'Rua del Toro, 54',
  starterIndex: 2,
  mainIndex : 2
})

const arr = [7,8,9];

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);


const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array

const mainMenuCopy  =[...restaurant.mainMenu];

//merging the menus

const allMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(allMenu);


//Iterables: arrays, strings, maps, sets, NOT objects
const str = "Murillo";
const letters = [...str + " " + 's']
console.log(letters);
console.log(...str);

const ingredients = [prompt(`Let\'s make pasta. Ingredient 1?`),
 prompt(`Let\'s make pasta. Ingredient 2?`),
 prompt(`Let\'s make pasta. Ingredient 3?`)];

console.log(ingredients);

//restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//Objects

const newRestaurant = {...restaurant, founder: 'Giuseppe', fouding: 1997};



//const {name, openingHours, categories} = restaurant;

const {
  name : restaurantName,
  openingHours : opening,
  categories: tags} = restaurant;

console.log(restaurantName, opening, tags)

const {menu = [], starterMenu: starters = []} = restaurant;

console.log(menu, starters);

//mutating variables

let a = 111;
let b = 222;

const obj = {a:23, b:7, c:14};

({a, b} = obj);

console.log(a,b);

const {
  fri:{ open: o, close: c }
} = openingHours;

console.log(o, c);

const arr= [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr;
console.log(x,y,z);
console.log(arr);

// let[main, ,secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main=secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

const nested = [2, 4, [5, 6]];
// const[i, , j] = nested;
// console.log(i, j);

const[i, ,[j, k]] = nested;
console.log(i, j, k);

//Defaulf values
const[p = 1,q = 1,r = 1] = [3,0];

console.log(p,q,r);
*/