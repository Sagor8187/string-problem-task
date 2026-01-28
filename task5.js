// Task-5:
// Capitalize Every first Letter of each word in a String


let word = "hello bangladesh"

let title = word.split(" ").map(i => i[0].toUpperCase() + i.slice(1)).join(" ")
console.log(title)