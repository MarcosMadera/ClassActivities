const sales = [
  100,
  200,
  300,
  400,
  800,
  1200,
  50,
  45,
  33,
  77,
  99,
  120,
  30,
  60,
  400,
  90
];

const fruits = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple",
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple",
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple",
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple",
  "kiwi"
];

let fruitCount = fruits.reduce(
  (acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    // console.log(acc);
    return acc;
  },
  { fresh: true }
);

const products = [
  { product: "Laptop", price: 1000, quantity: 2, SKU: 982374 },
  { product: "Mouse", price: 50, quantity: 4, SKU: 982888 },
  { product: "Keyboard", price: 80, quantity: 1, SKU: 543766 },
  { product: "Monitor", price: 300, quantity: 2, SKU: 432098 },
  { product: "Speaker", price: 350, quantity: 2, SKU: 432090 },
  { product: "Lights", price: 100, quantity: 2, SKU: 432798 },
  { product: "Mic", price: 80, quantity: 4, SKU: 432733 },
  { product: "Fan", price: 60, quantity: 2, SKU: 432711 }
];

let productPrices = products.map(product => product.price * product.quantity);

let discount = 2;
products.forEach(product => {
  product.price /= discount;
  console.log(product.price, "here");
});

let totalRevenue = products.reduce(
  (acc, product) => acc + product.price * product.quantity,
  0
);

const nestedMess = [
  [1, 2],
  [3, 4],
  [6, 7],
  [7, 8],
  [0, 7]
];

let flat = nestedMess.reduce((acc, current) => acc.concat(current), []);

console.log(flat);

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 40 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 35 },
  { name: "Eve", age: 85 },
  { name: "Frank", age: 33 },
  { name: "Grace", age: 27 },
  { name: "Hank", age: 38 },
  { name: "Ivy", age: 25 },
  { name: "Jack", age: 42 },
  { name: "Kathy", age: 30 },
  { name: "Leo", age: 29 },
  { name: "Mona", age: 36 },
  { name: "Nate", age: 32 },
  { name: "Olivia", age: 26 },
  { name: "Paul", age: 37 },
  { name: "Quinn", age: 34 },
  { name: "Rita", age: 30 },
  { name: "Sam", age: 89 },
  { name: "Tina", age: 39 },
  { name: "Uma", age: 41 },
  { name: "Victor", age: 40 },
  { name: "Wendy", age: 30 },
  { name: "Xander", age: 29 },
  { name: "Yara", age: 33 },
  { name: "Zane", age: 27 },
  { name: "Anna", age: 32 },
  { name: "Brian", age: 35 },
  { name: "Clara", age: 31 },
  { name: "Derek", age: 58 }
];

let group = people.reduce((acc, person) => {
  const key = person.age;
  acc[key] = acc[key] || [];
  acc[key].push(person);
  return acc;
}, {});

console.log(group);

let totalz = 0;
sales.forEach(sale => {
  totalz += sale;
});

let total = sales.reduce((acc, sale) => {
  return acc + sale;
}, 0);

console.log(fruitCount);

let totalProducts = products.reduce((acc, product) => acc + product.price, 0);

console.log(fruitCount);
