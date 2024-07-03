const inputBox = document.getElementById("input-box");
const listContainer = document.querySelector(".list-container");
// let span =document.createElement("span");it wont cause it is just one tag ,cant be with all the newLi tags
const btn = document.querySelector("button");
btn.addEventListener('click',function(){
    if(inputBox.value === ''){
        alert('u must write something');
    } else {
        let newLi =document.createElement('li');
        let newDiv =document.createElement('div');
        let span =document.createElement("span");
        listContainer.appendChild(newLi);
        newLi.innerHTML = inputBox.value ;
        newLi.appendChild(newDiv);
        span.innerHTML ="X";
        newLi.appendChild(span);
    }
    inputBox.value = '';//by default value ;
    saveData();
})
listContainer.addEventListener('click',function(e){
    if(e.target.tagName==="DIV"){
        e.target.classList.toggle("checked");//toggle very imp;;;!!!
        e.target.parentElement.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
      saveData();
    }
})
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML =localStorage.getItem("data");
}
showData();