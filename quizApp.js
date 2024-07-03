// let questions =[
// {
//     question : 'which is the largest continent in asia?' ,
//     answers : [
//     {text:'asia' ,correct: true },
//     {text :'america', correct:false},
//     {text:'bangladesh',correct:false},
//     {text:'gendia',correct:false}
//     ]
// },
// {
//     question : 'which is the smallest continent in asia?' ,
//     answers : [
//     {text:'asia' ,correct: false },
//     {text :'america', correct:false},
//     {text:'bangladesh',correct:true},
//     {text:'gendia',correct:false}
//     ]
// }

// ]
// let questionElement = document.querySelector(".question") ;
// let options =document.querySelector(".opt-container");
// let nextBtn =document.querySelector(".next-btn");
// let questionIndex =0;
// function startQuiz() {

//     questionIndex =0 ;
//     let score = 0;
//     showQuestions();
// }
// function showQuestions() {
  
//     let currentQues = questions[questionIndex];
//     let currQuesNO = questionIndex + 1;
//     let quesTitle = currQuesNO + '. ' +currentQues.question ;
//     questionElement.innerHTML = quesTitle ;
//     currentQues.answers.forEach((answer)=>{
//         const button = document.createElement("li");
//         button.innerHTML =answer.text ;
//         options.appendChild(button);
//         if(answer.correct){
//             button.dataset.correct = answer.correct ;
//         }
      
//         button.addEventListener('click',selectAnswer);
      
        
//     });
// }
// function selectAnswer(e){
  
//     Array.from(options.children).forEach((button)=>{
// setTimeout(() => {
//     if(button.dataset.correct === "true"){
//         button.classList.add("correct");
//     }
// }, 300);
//   button.disabled=true ;
   
//     })
  
// const selectedBtn = e.target;
// const isCorrect =selectedBtn.dataset.correct === "true";
// if(isCorrect){
//     selectedBtn.classList.add("correct");
  
// } else{
//     selectedBtn.classList.add("inCorrect");
   
// }


// nextBtn.style.display = "block";
// options= null;
// }

// startQuiz();


// alternative
// const qsnArray = [
//     {question : "whats thela hrw?",
//       a:"asia",
//       b:"bindia" ,
//       c:"bangladesh" ,
//       d:"china",
//       correct:"a"
//     },
//     {
//         question:"smallest pnis?",
//         a:"japan",
//         b:"india",
//         c:"bd",
//         d:"china",
//         correct:"c"
//     }
// ];
// let index =0 ;
// let optIndex = 0;
// console.log(qsnArray[index])
// let options =document.querySelectorAll(".options");

// function showQuiz(){
//     let qsns = qsnArray[index];
//     options[optIndex].innerHTML = qsns.a ;
//     options[optIndex+1].innerHTML = qsns.b ;
//     options[optIndex+2].innerHTML = qsns.c ;
//     options[optIndex+3].innerHTML = qsns.d ;
//     options.forEach((ans)=>{
//         ans.addEventListener('click',(e)=>{
//     e.target.classList.add("correct");
//         })
//     })
// }
// showQuiz();
/*new shit*/
let folder = document.querySelector(".quiz-app");
let html =  ` <ol class="opt-container">
<li>answer</li>
<li>answer</li>
<li>answer</li>
<li>answre</li>
</ol> `  ;
folder.innerHTML += html ;