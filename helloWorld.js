console.log('Hello, Universe')

const firstName = 'Liz';

let age = 21;

const isCool = true;

let height = null;

// console.log(typeof firstName)
// console.log(typeof age)
// console.log(typeof isCool)
// console.log(typeof height)

let x = 4;
let y = 10;
let z = 7 + 9;
let sum = x + y + z;
sum = x + y - z;

let diff = (x + y) - (y + z)
console.log(sum)

// let string = 'Hello, Universe'
// let welcomeString = string + " " + firstName

// use backticks
let welcomeString = `Hello, Universe ${firstName}`; //template literal. template string

console.log(welcomeString);

if(age >= 21){
    console.log(`you can drink ${firstName}`)
} else {
    console.log(`you've got some growing up to do`)
}

let score = 78
let passing = 40
score = 40
// if(score > 40){
//     console.log(`you passed`)
// } else{
//     console.log(`you failed`)
// }

// if(score > passing){
//     console.log(`you passed`)
// } 
if(score !== passing){
    console.log('you just passed')
} else {
    score + 5
    console.log(score)
    console.log('try again')
    console.log(`you failed`)
}
 