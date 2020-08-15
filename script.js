//Basic operation functions
const add = (accumulator, currentValue) => {
    return accumulator + currentValue;
};

const subtract = (accumulator, currentValue) => {
    return accumulator - currentValue;
};

const multiply = (accumulator, currentValue) => {
    return accumulator * currentValue;
};

const divide = (accumulator, currentValue) => {
    return accumulator / currentValue;
};

//Function that takes an operator and 2 numbers and then calls one of the basic functions on the numbers
const singleOp = (inp1,inp2,operator) => {
    switch(operator) {
        case '+':
            return add(inp1,inp2);
            break;
        case '-':
            return subtract(inp1,inp2);
            break;
        case '*':
            return multiply(inp1,inp2);
            break;
        case '/':
            return divide(inp1,inp2);
            break;
    };
};

const operate = (inp) => {
    inpArr = inp.split(" ");
    const numRegex = /[0-9]/g;
    const pointRegex = /\./g;
    let operatorList = [];
    let numberList = [];
    console.log(inp);
    console.log(inp.includes("/ 0"));
    if (inp.includes("/ 0")) {
        calcOutDisp.setAttribute('style','font-size: 1rem;');
        return 'Dividing by zero? How about no.';
    } else {
        for (let i = 0; i < inpArr.length; i++) {
            if (numRegex.test(inpArr[i])) {
                if (inpArr[i].match(/\./g) !== null && inpArr[i].match(/\./g).length > 1) {
                    calcOutDisp.setAttribute('style','font-size: 1rem;');
                    console.log(inpArr[i].match(/\./g).length);
                    return 'Too many decimal points!';
                } else {
                    numberList.push(Number(inpArr[i]));
                };
            } else {
                operatorList.push(inpArr[i]);
            };
        };
        for(let i = 0; i < operatorList.length; i++) {
            let currentOpInp = numberList.splice(0, 2);
            console.log(currentOpInp);
            numberList.unshift(singleOp(currentOpInp[0],currentOpInp[1],operatorList[i]));
        };
        const output = Math.round((numberList[0] + Number.EPSILON) * 100) / 100;
        return output;
    };
};

//Wiring up the buttons and display to variables in the script
const calcInpDisp = document.querySelector('#calc-inp');
const calcOutDisp = document.querySelector('#calc-out');

const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');

const deleteBtn = document.querySelector('#delete');
const clearBtn = document.querySelector('#clear');
const equalBtn = document.querySelector('#equal');

const pointBtn = document.querySelector('#point');
const zeroBtn = document.querySelector('#zero');
const oneBtn = document.querySelector('#one');
const twoBtn = document.querySelector('#two');
const threeBtn = document.querySelector('#three');
const fourBtn = document.querySelector('#four');
const fiveBtn = document.querySelector('#five');
const sixBtn = document.querySelector('#six');
const sevenBtn = document.querySelector('#seven');
const eightBtn = document.querySelector('#eight');
const nineBtn = document.querySelector('#nine');

//Functions to store the input value and display it in the calc-inp element
const clear = () => {
    inpArr = [];
    calcInpDisp.textContent = '';
    calcOutDisp.textContent = '';
    calcOutDisp.setAttribute('style','font-size: 3rem;');
};

const equal = () => {
    inp = inpArr.join('');
    if (calcInpDisp.textContent==='') {
        calcOutDisp.setAttribute('style','font-size: 1rem;');
        calcOutDisp.textContent = 'No input given.';
    } else if (operate(inp) === Infinity) {
        calcOutDisp.setAttribute('style','font-size: 1rem;');
        calcOutDisp.textContent = 'Dividing by zero? How about no.';
    } else if (operate(inp)) {
        calcOutDisp.textContent = operate(inp);
    } else {
        if (operate(inp) === 0) {
            calcOutDisp.textContent = operate(inp);
        } else {
            calcOutDisp.setAttribute('style','font-size: 1rem;');
            calcOutDisp.textContent = 'Unexpected input. Please try again.';
        };
    };
};

const addBtnFunc = () => {
    if (calcOutDisp.textContent) {
        inpArr = [];
        inpArr.push('0');
        calcInpDisp.textContent = '0';
        calcOutDisp.textContent = '';
        calcOutDisp.setAttribute('style','font-size: 3rem;');
    } else if (!calcInpDisp.textContent) {
        inpArr.push('0');
        calcInpDisp.textContent = '0';
    };
    inpArr.push(' + ');
    calcInpDisp.textContent += '+';
};

const subtractBtnFunc = () => {
    if (calcOutDisp.textContent) {
        inpArr = [];
        inpArr.push('0');
        calcInpDisp.textContent = '0';
        calcOutDisp.textContent = '';
        calcOutDisp.setAttribute('style','font-size: 3rem;');
    } else if (!calcInpDisp.textContent) {
        inpArr.push('0');
        calcInpDisp.textContent = '0';
    };
    inpArr.push(' - ');
    calcInpDisp.textContent += '-';
};

const multiplyBtnFunc = () => {
    if (calcOutDisp.textContent) {
        inpArr = [];
        inpArr.push('0');
        calcInpDisp.textContent = '0';
        calcOutDisp.textContent = '';
        calcOutDisp.setAttribute('style','font-size: 3rem;');
    } else if (!calcInpDisp.textContent) {
        inpArr.push('0');
        calcInpDisp.textContent = '0';
    };
    inpArr.push(' * ');
    calcInpDisp.textContent += 'x';
};

const divideBtnFunc = () => {
    if (calcOutDisp.textContent) {
        inpArr = [];
        inpArr.push('0');
        calcInpDisp.textContent = '0';
        calcOutDisp.textContent = '';
        calcOutDisp.setAttribute('style','font-size: 3rem;');
    } else if (!calcInpDisp.textContent) {
        inpArr.push('0');
        calcInpDisp.textContent = '0';
    };
    inpArr.push(' / ');
    calcInpDisp.textContent += '÷';
};

const pointBtnFunc = () => {
    if (calcOutDisp.textContent) {
        clear();
    };
    inpArr.push('.');
    calcInpDisp.textContent += '.';
};

const zeroBtnFunc = () => {
    if (calcOutDisp.textContent) {
        clear();
    };
    inpArr.push('0');
    calcInpDisp.textContent += '0';
};

const oneBtnFunc = () => {
    if (calcOutDisp.textContent) {
        clear();
    };
    inpArr.push('1');
    calcInpDisp.textContent += '1';
};

const twoBtnFunc = () => {
    if (calcOutDisp.textContent) {
        clear();
    };
    inpArr.push('2');
    calcInpDisp.textContent += '2';
};

const threeBtnFunc = () => {
    if (calcOutDisp.textContent) {
        clear();
    };
    inpArr.push('3');
    calcInpDisp.textContent += '3';
};

const fourBtnFunc = () => {
    if (calcOutDisp.textContent) {
        clear();
    };
    inpArr.push('4');
    calcInpDisp.textContent += '4';
};

const fiveBtnFunc = () => {
    if (calcOutDisp.textContent) {
        clear();
    };
    inpArr.push('5');
    calcInpDisp.textContent += '5';
};

const sixBtnFunc = () => {
    if (calcOutDisp.textContent) {
        clear();
    };
    inpArr.push('6');
    calcInpDisp.textContent += '6';
};

const sevenBtnFunc = () => {
    if (calcOutDisp.textContent) {
        clear();
    };
    inpArr.push('7');
    calcInpDisp.textContent += '7';
};

const eightBtnFunc = () => {
    if (calcOutDisp.textContent) {
        clear();
    };
    inpArr.push('8');
    calcInpDisp.textContent += '8';
};

const nineBtnFunc = () => {
    if (calcOutDisp.textContent) {
        clear();
    };
    inpArr.push('9');
    calcInpDisp.textContent += '9';
};

const deleteBtnFunc = () => {
    if (calcOutDisp.textContent) {
        clear();
    } else {
        inpArr.pop();
        calcInpDisp.textContent = calcInpDisp.textContent.slice(0,-1);
    };
};

let inpArr = [];

//Adding functional event listeners to all appropriate buttons and keys
addBtn.addEventListener('click', addBtnFunc);
subtractBtn.addEventListener('click', subtractBtnFunc);
multiplyBtn.addEventListener('click', multiplyBtnFunc);
divideBtn.addEventListener('click', divideBtnFunc);

pointBtn.addEventListener('click', pointBtnFunc);
zeroBtn.addEventListener('click', zeroBtnFunc);
oneBtn.addEventListener('click', oneBtnFunc);
twoBtn.addEventListener('click', twoBtnFunc);
threeBtn.addEventListener('click', threeBtnFunc);
fourBtn.addEventListener('click', fourBtnFunc);
fiveBtn.addEventListener('click', fiveBtnFunc);
sixBtn.addEventListener('click', sixBtnFunc);
sevenBtn.addEventListener('click', sevenBtnFunc);
eightBtn.addEventListener('click', eightBtnFunc);
nineBtn.addEventListener('click', nineBtnFunc);

deleteBtn.addEventListener('click', deleteBtnFunc);
clearBtn.addEventListener('click', clear);
equalBtn.addEventListener('click', equal);

//Testing
document.addEventListener('keydown', e => {
    switch(e.code) {
        case 'Equal':
            if (e.shiftKey) {
                addBtnFunc()
                addBtn.classList.add("oclicked");
                document.addEventListener('keyup', () => addBtn.classList.remove("oclicked"));
            } else {
                equal();
                equalBtn.classList.add("nclicked");
                document.addEventListener('keyup', () => equalBtn.classList.remove("nclicked"));
            };
            break;
        case 'Minus':
            subtractBtnFunc();
            subtractBtn.classList.add("oclicked");
            document.addEventListener('keyup', () => subtractBtn.classList.remove("oclicked"));
            break;
        case 'KeyX':
            multiplyBtnFunc();
            multiplyBtn.classList.add("oclicked");
            document.addEventListener('keyup', () => multiplyBtn.classList.remove("oclicked"));
            break;
        case 'Digit8':
            if (e.shiftKey) {
                multiplyBtnFunc();
                multiplyBtn.classList.add("oclicked");
                document.addEventListener('keyup', () => multiplyBtn.classList.remove("oclicked"));
            } else {
                eightBtnFunc();
                eightBtn.classList.add("nclicked");
                document.addEventListener('keyup', () => eightBtn.classList.remove("nclicked"));
            };
            break;
        case 'Slash':
            divideBtnFunc();
            divideBtn.classList.add("oclicked");
            document.addEventListener('keyup', () => divideBtn.classList.remove("oclicked"));
            break;
        case 'KeyC':
            clear();
            clearBtn.classList.add("cclicked");
            document.addEventListener('keyup', () => clearBtn.classList.remove("cclicked"));
            break;
        case 'Backspace':
            deleteBtnFunc();
            deleteBtn.classList.add("cclicked");
            document.addEventListener('keyup', () => deleteBtn.classList.remove("cclicked"));
            break;
        case 'Period':
            pointBtnFunc();
            pointBtn.classList.add("nclicked");
            document.addEventListener('keyup', () => pointBtn.classList.remove("nclicked"));
            break;
        case 'Digit0':
            zeroBtnFunc();
            zeroBtn.classList.add("nclicked");
            document.addEventListener('keyup', () => zeroBtn.classList.remove("nclicked"));
            break;
        case 'Digit1':
            oneBtnFunc();
            oneBtn.classList.add("nclicked");
            document.addEventListener('keyup', () => oneBtn.classList.remove("nclicked"));
            break;
        case 'Digit2':
            twoBtnFunc();
            twoBtn.classList.add("nclicked");
            document.addEventListener('keyup', () => twoBtn.classList.remove("nclicked"));
            break;
        case 'Digit3':
            threeBtnFunc();
            threeBtn.classList.add("nclicked");
            document.addEventListener('keyup', () => threeBtn.classList.remove("nclicked"));
            break;
        case 'Digit4':
            fourBtnFunc();
            fourBtn.classList.add("nclicked");
            document.addEventListener('keyup', () => fourBtn.classList.remove("nclicked"));
            break;
        case 'Digit5':
            fiveBtnFunc();
            fiveBtn.classList.add("nclicked");
            document.addEventListener('keyup', () => fiveBtn.classList.remove("nclicked"));
            break;
        case 'Digit6':
            sixBtnFunc();
            sixBtn.classList.add("nclicked");
            document.addEventListener('keyup', () => sixBtn.classList.remove("nclicked"));
            break;
        case 'Digit7':
            sevenBtnFunc();
            sevenBtn.classList.add("nclicked");
            document.addEventListener('keyup', () => sevenBtn.classList.remove("nclicked"));
            break;
        case 'Digit9':
            nineBtnFunc();
            nineBtn.classList.add("nclicked");
            document.addEventListener('keyup', () => nineBtn.classList.remove("nclicked"));
            break;
        case 'Enter':
            equal();
            equalBtn.classList.add("nclicked");
            document.addEventListener('keyup', () => equalBtn.classList.remove("nclicked"));
            break;
    };
});