//Basic operation functions
const add = (accumulator, currentValue) => {
    return accumulator + currentValue;
};
/*
const addInp = prompt('Which numbers to add? [a,b]');
const addInpArr = addInp.split(",");
for (let i = 0; i < addInpArr.length; i++) {
    addInpArr[i] = Number(addInpArr[i]);
};
const sum = addInpArr.reduce(add);
console.log(sum);
*/

const subtract = (accumulator, currentValue) => {
    return accumulator - currentValue;
};
/*
const subtractInp = prompt('Which numbers to subtract? [a,b]');
const subtractInpArr = subtractInp.split(",");
for (let i = 0; i < subtractInpArr.length; i++) {
    subtractInpArr[i] = Number(subtractInpArr[i]);
};
const diff = subtractInpArr.reduce(subtract);
console.log(diff);
*/

const mutiply = (accumulator, currentValue) => {
    return accumulator * currentValue;
};
/*
const mutiplyInp = prompt("Which numbers to multiply? [a,b]");
const multiplyInpArr = mutiplyInp.split(",");
for (let i = 0; i < multiplyInpArr; i++) {
    multiplyInpArr[i] = Number(multiplyInpArr[i]);
};
const product = multiplyInpArr.reduce(mutiply);
console.log(product);
*/

const divide = (accumulator, currentValue) => {
    return accumulator / currentValue;
};
/*
const divideInp = prompt("Which numbers would you like to divide? [a,b]");
const divideInpArr = divideInp.split(",");
for (let i = 0; i < divideInpArr.length; i++) {
    divideInpArr[i] = Number(divideInpArr[i]);
};
const quotient = divideInpArr.reduce(divide);
console.log(quotient);
*/