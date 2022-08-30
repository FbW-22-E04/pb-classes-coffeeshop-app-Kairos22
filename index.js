class CoffeeShop {

  constructor(name, menu, orders) {

    this.name = name;
    this.menu = menu;
    this.orders = orders;
  }


  addOrder(name) {

	const result = this.menu.filter((el) => el.name === name);

	if(result .length > 0){

		this.orders.push(name)}

	else{

	console.log("This item is currently unavailable!");
		}
	}
  


  fulfillOrder() {

    if (!this.orders.length > 0) {	

 	console.log(`The ${this.orders[0]} is ready`)

	this.orders.shift()
	
    } 

	 else{console.log("All orders have been fulfilled")
	}
    
  }


listOrders(){

	console.log('Orders:', this.orders);

}

dueAmount(){

	let total = 0;
	this.orders.forEach(item => {
		const price = this.menu.find(el => el.name === item).price
		console.log("dueAmount-price", price);

		total += price
	})

	console.log("dueAmount-total", total);
}


cheapestItem(){

	let cheapest = {
		price: Infinity,
		name: ''

	};

	this.menu.forEach(el => {

	if(el.price < cheapest.price)
	 {cheapest.price =el.price
	}
	console.log("cheapestItem", cheapest.name, 'with price', cheapest.price);

	})
}


drinksOnly(){

	const drinks = this.menu.filter(el => el.type === 'drink')
	console.log(drinks);
	
}

}


	

const menu = [
  {
    name: "Ale",
    type: "drink",
    price: 3,
  },
  {
    name: "Curry",
    type: "food",
    price: 7,
  },
  {
    name: "Espresso",
    type: "drink",
    price: 2,
  },
  {
    name: "Fish",
    type: "food",
    price: 7,
  },
];



const redShrimp = new CoffeeShop('redShrimp', menu,[]) 

console.log(redShrimp);

redShrimp.addOrder("Fish");
redShrimp.addOrder("Ale");
redShrimp.drinksOnly();
redShrimp.fulfillOrder();
redShrimp.cheapestItem();
redShrimp.addOrder("Espresso")
redShrimp.listOrders()
redShrimp.dueAmount()
console.log(redShrimp);