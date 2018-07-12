
function myFunction() {
    var cars = ["Hyderabad Pizza Vala", "Kurnool Pizza Vala", "Vizag Pizza Vala", "Delhi"]; 
    var x = document.getElementById("store");
    var i = x.selectedIndex;
    for (let index = 0; index < cars.length; index++) {
      
        
    if(i==index){
    document.getElementById("demo").innerHTML = cars[index];
}}}

var pizzaToppings = {};
pizzaToppings['Cheese'] = ['parmesian cheese', 'mozarilla cheeses', '5 blend cheese', ];
pizzaToppings['Veggie'] = ['Mushrooms', 'onion', 'red pepper', 'Tomato'];
pizzaToppings['Meat'] = ['pepperoni', 'chicken', 'grilled chicken', 'chicken 65'];

function ChangeOptions() {
    var pizzaSpecial = document.getElementById("pizza");
    var Toppings = document.getElementById("Toppings");
    var selCar = pizzaSpecial.options[pizzaSpecial.selectedIndex].value;
    while (Toppings.options.length) {
        Toppings.remove(0);
    }
    var pizzas = pizzaToppings[selCar];
    if (pizzas) {
        var i;
        for (i = 0; i < pizzas.length; i++) {
            var pizza = new Option(pizzas[i], i);
            Toppings.options.add(pizza);
        }
    }
} 