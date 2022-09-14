function  add (a,b) {
    x = a + b;
    console.log(x);
    myAnswer = x;
    return x;
   }
function subtract(a,b) {
    let x = a - b;
    console.log(x);
    myAnswer = x;
    return x;
      
  };

function divide (a,b) {
    let x = a/b;
    console.log(x);
    myAnswer = x;
    return x;
}
function multiply(...args) {
    const arr = Array.from(args);
    var newArray = arr.flat(Infinity);
    var x = 1;
    for (var i = 0; i < newArray.length; i++) {
      x *= newArray[i];
    }
    console.log(x);
    myAnswer =  x;
    return x;
};
function operate(x,y,z) {
    switch (x) {
        case '/': divide(y,z);
        break;
     
        case '*': multiply(y,z);
        break;
     
        case '-': subtract(y,z);
        break;
     
        case '+': add(y,z);
        break;
    } 
    return x;
}


const myArray = [];
var myAnswer;
const displayOne = document.querySelector('.displayOne');
const displayTwo = document.querySelector('.displayTwo');

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        var dataAttribute = button.getAttribute('data-key');
        displayOne.innerHTML+= dataAttribute;
        myArray.push(dataAttribute);
});
});


function convertInput() {
    indexOfMultiply = myArray.indexOf("*");
    indexOfAdd = myArray.indexOf("+");
    indexOfDivide = myArray.indexOf("/");
    indexOfSubtract = myArray.indexOf("-");

    if (indexOfMultiply > -1 && indexOfAdd == -1 && indexOfDivide == -1 && indexOfSubtract == -1) {
        firstString = parseInt(myArray.slice(0, indexOfMultiply).join(''));
        operator = myArray.slice(indexOfMultiply,indexOfMultiply+1).join('');
        lastString = parseInt(myArray.slice(indexOfMultiply+1).join(''));
        operate(operator,firstString,lastString);
    } else if (indexOfMultiply == -1 && indexOfAdd > -1 && indexOfDivide == -1 && indexOfSubtract == -1) {
        firstString = parseInt(myArray.slice(0, indexOfAdd).join(''));
        operator = myArray.slice(indexOfAdd,indexOfAdd+1).join('');
        lastString = parseInt(myArray.slice(indexOfAdd +1).join(''));
        operate(operator,firstString,lastString);
    } else if (indexOfMultiply == -1 && indexOfAdd == -1 && indexOfDivide > -1 && indexOfSubtract == -1) {
        firstString = parseInt(myArray.slice(0, indexOfDivide).join(''));
        operator = myArray.slice(indexOfDivide,indexOfDivide+1).join('');
        lastString = parseInt(myArray.slice(indexOfDivide +1).join(''));
        operate(operator,firstString,lastString);
    } else if (indexOfMultiply == -1 && indexOfAdd == -1 && indexOfDivide == -1 && indexOfSubtract > -1) {
        firstString = parseInt(myArray.slice(0, indexOfSubtract).join(''));
        operator = myArray.slice(indexOfSubtract,indexOfSubtract+1).join('');
        lastString = parseInt(myArray.slice(indexOfSubtract +1).join(''));
        operate(operator,firstString,lastString);
    }
}
// function reset () {
//     myArray.pop()
//     myAnswer = 0;
//     displayOne.innerHTML = "";
// }
const equalBtn = document.querySelector('#equalBtn');
equalBtn.addEventListener ('click', () => {
    convertInput();
    console.log(myAnswer);
    displayTwo.textContent = myAnswer;

});
// const acBtn = document.querySelector('#acBtn');
// acBtn.addEventListener ('click', () => {
//     reset();


// });
