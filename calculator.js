// const clearBtn = document.getElementById('clear-btn');
// const deleteBtn = document.getElementById('delete-btn');
// const divideBtn = document.getElementById('divide-btn');
// const multiplyBtn = document.getElementById('multiply-btn');
// const subtractBtn = document.getElementById('subtract-btn');
// const addBtn = document.getElementById('add-btn');
// const decimalBtn = document.getElementById('decimal-btn');
// const equalBtn = document.getElementById('equal-btn');
// const numberBtns = document.querySelectorAll('.number');
// const resultElement =document.querySelector(".input-box");
// let result = '',operation ='',previousOperand ='';
// let operators = document.querySelectorAll('.operators');

// function updateDisplay() {
//     // if(operation === '+' || operation === '-' || operation ==='x' || operation === '/')
//         if(operation){
//         resultElement.textContent = `${previousOperand + operation + result}` ;
//     } else{
//     resultElement.textContent = result ;
//     }
// }
// function selectOperator(operatorValue) {
//     if(result ===''){return ;}
//     if(result !== '' && previousOperand !== ''){
//         calculateResult();
//     }
//     operation = operatorValue ;
//     previousOperand = result;
//     result = '';
//     updateDisplay();
// }
// function calculateResult(){
//     let evaluatedResult ;
//     const prev = parseFloat(previousOperand);
//     const current = parseFloat(result) ;
//     if(isNaN(prev) || isNaN(current)){return ;}
//     switch (operation) {
//         case '+':
//             evaluatedResult = prev + current ;
//             break;
//         case '-':
//             evaluatedResult = prev - current ;
//             break;
//         case '/':
//             evaluatedResult = prev / current ;
//             break;
//         case 'x':
//             evaluatedResult = prev * current ;
//             break;
    
//         default:
//             return;
//     }
//   result = evaluatedResult.toString();
//   operation = '';
//   previousOperand = '';
// }
// function appendNumber(num){
//     if(num === '.' && result.includes('.')){
//         return ;//include() inbuild js function
//     }
//     result = result + num ;
//     updateDisplay();
// }
// numberBtns.forEach((num)=>{
//     num.addEventListener('click',()=>{
//        // resultElement.textContent = num.textContent ;
//       // let nums = parseFloat(num.textContent);//since result is string ,it is doing string plus number addition
//      appendNumber(num.textContent);
//     })
// })

// function clearDisplay(){
//     if(result === ''){return ;}
//     result = '';
//     operation ='';
//     previousOperand ='';
//     updateDisplay();
// }
// function deleteLastDigit(){
    
//     result = resultElement.textContent.slice(0,-1);
//     operation = '';
//     updateDisplay()
// }
// decimalBtn.addEventListener('click',()=>{
//     appendNumber(decimalBtn.textContent)
// })
// addBtn.addEventListener('click',()=>{ selectOperator(addBtn.textContent);})
// multiplyBtn.addEventListener('click',()=>{ selectOperator(multiplyBtn.textContent);})
// subtractBtn.addEventListener('click',()=>{ selectOperator(subtractBtn.textContent);})
// divideBtn.addEventListener('click',()=>{ selectOperator(divideBtn.textContent);})
// equalBtn.addEventListener('click',()=>{ 
//     calculateResult();
//     updateDisplay();
//     })
// clearBtn.addEventListener("click",clearDisplay) ;
// deleteBtn.addEventListener('click',deleteLastDigit);

/*2nd approach*/
// function appendNum(num) {
//     num.addEventListener('click',()=>{
        
//         result = result + num.textContent ; 
//     })
// }
const clearBtn = document.getElementById('clear-btn');
const deleteBtn = document.getElementById('delete-btn');
const equalBtn = document.getElementById('equal-btn');
const numberBtns = document.querySelectorAll('.number');
const resultElement =document.querySelector(".input-box");
let result = '',operation ='',previousOperand ='';
let operators = document.querySelectorAll('.operators');

function updateDisplay(){
if(previousOperand || operation){
    resultElement.textContent =`${previousOperand + operation + result}` ;
}   else {
    resultElement.textContent =result ;
}
}
function calculateResult(){
    let evaluatedResult ;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(result) ;
    if(isNaN(prev) || isNaN(current)){return ;}
    switch (operation) {
        case '+':
            evaluatedResult = prev + current ;
            break;
        case '-':
            evaluatedResult = prev - current ;
            break;
        case '/':
            evaluatedResult = prev / current ;
            break;
        case 'x':
            evaluatedResult = prev * current ;
            break;
    
        default:
            return;
    }
  result = evaluatedResult.toString();
  operation = '';
  previousOperand = '';
}
numberBtns.forEach((num)=>{
    num.addEventListener('click',()=>{
        if(num.textContent === '.' && result.includes('.')){
                 return ;//include() inbuild js function
                }
        result = result + num.textContent ; 
      updateDisplay()
    })
})
operators.forEach((oper)=>{
  oper.addEventListener('click',()=>{
    if(result==='' && previousOperand ===''){return ;}
    if(result !== '' && previousOperand !== '' && operation !== ''){
                 calculateResult();
             }
             /*i did it suckers*/
       if(previousOperand){      
    operation = oper.textContent ;
    result ='';}
    else{
        operation = oper.textContent ;
        previousOperand=result;
        result ='';
    }
    
    // resultElement.textContent =`${previousOperand + operation + result}` ;
     updateDisplay();
     
})
})
 equalBtn.addEventListener('click',()=>{ 
     calculateResult();
     updateDisplay();
     })
function clearDisplay(){
    result = '';
    operation ='';
    previousOperand ='';
    updateDisplay();
}
function deleteLastDigit(){
   let resulted = resultElement.textContent.slice(0,-1);
   if(operation ==='' && result ==='' && previousOperand){
    result = previousOperand ;
    previousOperand = '';
    }
   if(result ==='' && previousOperand && operation){
    operation ='';}
 
   if(result){result = result.slice(0,-1);}
   resultElement.textContent = resulted ;
}
clearBtn.addEventListener("click",clearDisplay) ;
deleteBtn.addEventListener('click',deleteLastDigit);