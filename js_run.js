function greet(nameOfPerson) {
    var greeting_message = "Welcome , Mr " + nameOfPerson
    console.log(greeting_message)
    return greeting_message
}

greet("Bala")
greet("Zhi Min")
greet("Kenneth")

document.getElementById("output").innerHTML = greet("Sun");
