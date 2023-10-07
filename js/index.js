// Iteration 1: Names and Input
// Hacker 1
let hacker1 = "Yosua";
console.log("The driver's name is " + hacker1);
// Hacker 2
let hacker2 = "yosua";
console.log(`The driver's name is ${hacker2}`); // i use backtick(``)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
