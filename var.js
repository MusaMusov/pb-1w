//function solve(input) {
//    let name =(input[0]);
//    console.log("Hello, " + name + "!");
//}

//solve(["Musa"]);

//function solve(input) {
//    let side =(input[0]);
//    console.log(side * side);
//}
//
//solve(["4"]);

//function solve(input) {
//    let firstName = "Musa"
//    let lastNAme = "Musov"
//    let age = 18
//    let str = firstName +" " + lastNAme +" " + age +" " + "years old"
//    console.log(str)+" "
//}
//
//solve()

//function ostatuk() {
//    console.log(5%2)
//}

//function solve(input) {
//    let firstName = input[0]
//    let lastNAme = input[1]
//    let age = input[2]
//    let town = input[3]
//    console.log(`You are ${firstName} ${lastNAme}, a ${age}-years old person from ${town}.`)
//}
//
//solve(["Musa", "Musov", 18, "Zaraevo"])

//function solve(input) {
//    let inches = input[0]
//    let centimeters = inches * 2.54
//    console.log(centimeters)
//}
//
//solve([5])

//function solve(input) {
//    let name = input[0]
//    let projects = input[1]
//    let time = projects * 3
//    console.log(`The architect ${name} will need ${time} hours to complete ${projects} project/s.`)
//}
//
//solve(["Musa", "20"])

//function solve(input) {
//    let dogFood = input[0]
//    let catFood = input[1]
//    let catFoodPrice = 4
//    let dogFoodPrice = 2.50
//    finalSum = dogFood*dogFoodPrice + catFood*catFoodPrice 
//    console.log(`${finalSum} lv.`)
//}
//
//solve([4, 5])

function solve(input) {
    let sqMeters = input[0]
    let finalSum = sqMeters * 7.61
    let discount = finalSum * 0.18
    let discountedPrice = finalSum - discount
    console.log(`The final price is: ${discountedPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}

solve([550])