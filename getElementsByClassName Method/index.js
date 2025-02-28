
let fruitClassList = document.getElementsByClassName("fruit");

fruitClassList[2].style.backgroundColor = "yellow";

for (let el of fruitClassList) {
    el.style.fontWeight = "bold";
}
