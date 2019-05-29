class Pizza {
  constructor(crust, size) {
    this.toppings = ["cheese"];
    this.crust = crust;
    this._size = size;
  }
  addTopping(topping) {
    this.toppings.push(topping);
  }
  set size(size) {
    if (size === "s" || size === "m" || size === "l") {
      this._size = size;
    }
  }
  get size() {
    return this._size;
  }
  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + this.toppings.length * toppingPrice;
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

let pizza = new Pizza();
pizza.size = "l";
console.log(pizza.size);
console.log(pizza.price);
