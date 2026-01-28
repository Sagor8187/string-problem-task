// Task-2:
// Count how many times a string has the letter a or A

let country = "banglAdesh";

let letter = "a"
let count  = 0
for(let i=0; i < country.length;i++ ){
    if (country[i].toLowerCase() === letter.toLowerCase()){
        count+=1
    }
}
console.log(count)