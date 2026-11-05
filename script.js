var str = "AmAzInG"

console.log(str.toUpperCase())
console.log("<br>")

console.log(str.toLowerCase())
console.log("<br>")

console.log(str.startsWith("i"))
console.log("<br>")

var str1 = "Today I learnt about Javascript Methods"
var patt = new RegExp("learnt")
var result = patt.test(str1)
console.log(result)