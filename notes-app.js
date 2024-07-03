let createBtn =document.querySelector(".create-btn");
let notesContainer = document.querySelector(".notes-container");
let notes ,textArea ;
createBtn.addEventListener('click',()=>{
    textArea = document.createElement("textarea");
    let dltImg = document.createElement("img");
    notes = document.createElement("div");
    dltImg.classList="dlt-img"//whats the difference between className and classList
    dltImg.src= "./icon1.png"
    textArea.classList = "input-box";
    notes.appendChild(textArea);
    notes.appendChild(dltImg);
    notesContainer.appendChild(notes);
    // notesContainer.appendChild(dltImg);
    saveData();
})
notesContainer.addEventListener('click',(e)=>{
    if(e.target.tagName === "IMG"){
      e.target.parentElement.remove();
    }
    saveData();
})
function saveData(){
  localStorage.setItem('data',notesContainer.innerHTML);
  localStorage.setItem('text',textArea.innerHTML)
}
function showData(){
  notesContainer.innerHTML = localStorage.getItem("data");
  textArea.innerHTML = localStorage.getItem('text');
}
showData();