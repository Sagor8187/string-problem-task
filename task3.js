// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u

let text = "hello".toLowerCase()
let vowel = 0

for( let i = 0 ; i < text.length;i++){
    if (text[i] === 'a' || text[i] === 'e' || text[i] === 'i' || text[i] === 'o' || text[i] === 'u'){
        vowel +=1
    }
}
console.log(vowel)