let pizzaToppings = ["pepperoni", "bacon", "mushrooms", "onions"];

function greetCustomer() {
  console.log("Welcome to Pizza House, our toppings are:");
  for (let topping of pizzaToppings) {
    console.log(`- ${topping}`);
  }
}

function getPizzaOrder(size, crust, toppings) {
  console.log(
    `One ${size} ${crust} crust pizza with ${toppings.join(", ")} coming up!`
  );
  return [size, crust, toppings];
}

function preparePizza(order) {
  console.log("Cooking pizza");
  let pizza = {
    size: order[0],
    crust: order[1],
    toppings: order[2]
  };
  return pizza;
}
function servePizza(pizza) {
  console.log(
    `Order up! Here's your ${pizza.size} ${
      pizza.crust
    } crust pizza with ${pizza.toppings.join(", ")}. Enjoy!`
  );
  return pizza;
}

greetCustomer();

let order = getPizzaOrder("large", "thick", "pepperoni", "mushrooms", "onions");

let cookedPizza = preparePizza(order);

servePizza(cookedPizza);
