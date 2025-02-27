// Write your code below:
let h1Node = document.getElementById("main-heading");
h1Node.textContent = "Fruit World"

let headerDiv = document.getElementById("header");

let basketHeading = document.getElementById("basket-heading");

h1Node.style.color = "orange";

headerDiv.style.backgroundColor = "green";

headerDiv.style.borderBottom = "2px solid orange";

basketHeading.style.color = "green";

let paraDiv = document.createElement("div");
paraDiv.id = "thanks";

document.body.appendChild(paraDiv);

let paragraphElement = document.createElement("p");
paragraphElement.textContent = "Please visit us again";

document.getElementById("thanks").appendChild(paragraphElement);






