// Task-1:
// Count how many times a string has the letter a

//1 solve use for loop
let country = "bangladesh";

let letter = "a"
let count  = 0
for(let i=0; i < country.length;i++ ){
    if (country[i] === letter){
        count+=1
    }
}
console.log(count)


//2 use split 

let text = "banana"

let check = "a"

let checkLetter = text.split(check).length -1
console.log(checkLetter) 
