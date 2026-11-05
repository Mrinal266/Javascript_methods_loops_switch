var fruits = ["Apple", "Mango", "Banana", "Grapes", "Orange", "Blueberry", "Peach"]
var text = ""
var i 

for (i = 0; i < fruits.length; i++){
    text += fruits[i] + "<br>"
}

document.getElementById("demo").innerHTML = text