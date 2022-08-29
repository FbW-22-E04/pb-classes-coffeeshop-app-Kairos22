class CoffeeShop {
	constructor (name, menu, orders) {
		this.name = name
		this.menu = menu
		this.orders = orders
	}
	addItem(item) {
		this.menu.push(item);
	}
	addOrder(product){
     const idx = this.menu.findIndex((item) => item.item === product);
	 if (idx === -1){
		console.log("This item is currently unavailable!");
	 } else {
		this.orders.push(product);
		console.log(`Order added!`);
		console.log(this.orders);
	 }


	}

	fulfillOrder(){
		console.log(this.orders);
		if (this.orders.length !== 0) {
			console.log(`The ${this.orders.shift()} is ready!`);
			console.log(this.orders);
		}else {
			console.log(`All orders have been fulfilled!`);
		}
	}
	listOrders(){
		if (this.orders.length !== 0){
			console.log(this.orders);

		}else {
			console.log([]);
		}
		
	}

}

const shop1 = new CoffeeShop ("Rudy's Famous Coffee", [{item: "English Tee", type: "drink", price: 2},
{item: "Hot Cappuccino", type: "drink", price: 3},
{item: "Chees Cake", type: "food", price: 5},
{item: "Pan Cakes", type: "food", price: 6},
{item: "Eggs", type: "food", price: 4},
{item: "Esspreso", type: "drink", price: 1}],[]);

console.log(shop1);
shop1.addOrder("Esspreso");
shop1.addOrder("Eggs");
shop1.addOrder("Pan Cake")
shop1.addOrder("Chees Cake")
shop1.fulfillOrder();
shop1.fulfillOrder();
shop1.listOrders();

// const arr = [1, 2, 3, 4]
// console.log(arr.shift());
// console.log(arr);