let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let clear = document.getElementById("clear");
let bkBtn = document.getElementById("bkBtn");
let dot = document.getElementById("dot");
let displayVal=0;
let pendingVal;
let evalStringArray=[];


let numBtns = document.getElementsByClassName("numBtns");
let operatorBtns = document.getElementsByClassName("operatorBtns");

for(let i=0; i< numBtns.length; i++){
numBtns[i].addEventListener('click', updateDisplay, false);
}

for(let i=0; i< operatorBtns.length; i++){
operatorBtns[i].addEventListener('click', performOperation, false);
}

function updateDisplay(clickEvent){
let btnText = clickEvent.target.innerText;
if(displayVal===0){
displayVal='';
}
displayVal+=btnText;
document.getElementById("inputVal").value = displayVal;
}

function performOperation(clickEvent){
  let operator = clickEvent.target.innerText;
    switch(operator){
      case '-':
      pendingVal=displayVal;
      displayVal=0;
      document.getElementById("inputVal").value = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push('-');
      break;

      case '+':
    pendingVal=displayVal;
    displayVal=0;
    document.getElementById("inputVal").value = displayVal;
    evalStringArray.push(pendingVal);
    evalStringArray.push('+');
    break;

    case 'x':
    pendingVal=displayVal;
    displayVal=0;
    document.getElementById("inputVal").value = displayVal;
    evalStringArray.push(pendingVal);
    evalStringArray.push('*');
    break;
    case '÷':
    pendingVal=displayVal;
    displayVal=0;
    document.getElementById("inputVal").value = displayVal;
    evalStringArray.push(pendingVal);
    evalStringArray.push('/');
    break;
    case '=':
    evalStringArray.push(displayVal);
    let evaluation = eval(evalStringArray.join(' '));
    document.getElementById("inputVal").value = evaluation;
    evalStringArray=[];
    break;
    default:
    break;
  }

}

clear.onclick=()=>{
displayVal=0;
pendingVal=undefined;
evalStringArray=[];
document.getElementById("inputVal").value = displayVal;
}

bkBtn.onclick=()=>{
displayVal = displayVal.slice(0, displayVal.length-1);
if(displayVal===''){
displayVal=0;
}
document.getElementById("inputVal").value = displayVal;
}

dot.onclick=()=>{
  if(!displayVal.includes('.')){
    displayVal+='.';
  }
document.getElementById("inputVal").value = displayVal;
}
