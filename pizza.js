class Pizza {
  constructor(crust, size) {
    this.toppings = ["cheese"];
    this.crust = crust;
    this.size = size;
  }
  addTopping(topping) {
    this.toppings.push(topping);
  }
}

let pizza1 = new Pizza("whole wheat", "large");
console.log(pizza1.toppings);
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
console.log(pizza1.toppings);
console.log(pizza1);

let pizza2 = new Pizza("white", "small");
console.log(pizza2.toppings);
pizza2.addTopping("more cheese");
console.log(pizza2.toppings);
console.log(pizza2);
