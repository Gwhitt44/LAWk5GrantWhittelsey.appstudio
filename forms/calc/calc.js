function Sum(num1,num2){
  let functionSum = num1+num2
  return functionSum
}

let num1 = Number(prompt("Please enter your first number."));
let num2 = Number(prompt("Please enter your second number."));


let summedNumbers = Sum(num1,num2)
console.log(`The sum of ${num1} and ${num2} is ${summedNumbers}`)

