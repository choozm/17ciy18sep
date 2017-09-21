function greet(nameOfPerson) {
    var greeting_message = "Welcome , Mr " + nameOfPerson
    console.log(greeting_message)
    return greeting_message
}

greet("Bala")
greet("Zhi Min")
greet("Kenneth")

document.getElementById("output").innerHTML = greet("Sun");

var eggTray = ["orangeEgg", "blueEgg", "purpleEgg", "redEgg"];
eggTray.pop();eggTray.pop();eggTray.pop();
console.log(eggTray.pop()); // orangeEgg
console.log(eggTray.pop()); // undefined
