// JS Exercise 2

var brands = [];
var inventory = [];


// 1. Use the correct Array method to put these values in 
//    the 'brands' array: 'Apple','Samsung','Sony'
// Add your code here...

// brands.push('Apple');
// brands.push('Samsung');
// brands.push('Sony');

// console.log(brands);




// 2. Add the following arrays into the array 'inventory'
//    using the correct array method
var prod1 = ['Samsung','S22', 2800];
var prod2 = ['Apple','iPhone 13', 3000];
var prod3 = ['Sony', 'PS5', 2500];

// Note: the 'inventory' array should look like this
// var inventory = [
//     ['Samsung',     'S22',          2800],
//     ['Apple',       'iPhone 13',    3000],
//     ['Sony',        'PS5',          2500]
// ]
// Add your code here...

inventory.push(prod1);
inventory.push(prod2);
inventory.push(prod3);

console.log(inventory)



// 3. Use console.log() to log the number of items in the 'inventory'
// Add your code here...


// console.log( inventory.length );



// 4. (BONUS) Use the for loop to add up the total price of all three
//    products.
// Add your code here...


// var inventory = [
//     ['Samsung',     'S22',          2800],
//     ['Apple',       'iPhone 13',    3000],
//     ['Sony',        'PS5',          2500]
// ]


var total = 0;

for( var index = 0; index < inventory.length; index++) {
    total += inventory[index][2]
}

console.log(total);

