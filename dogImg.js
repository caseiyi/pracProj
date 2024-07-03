let apiUrl = 'https://dog.ceo/api/breeds/image/random';
let breeds = 'https://dog.ceo/api/breeds/list/all';
let btn = document.querySelector('button')
let val =  document.querySelector('#search-box')
async function dogImg(){
    let response = await fetch(breeds);
    let data = await response.json();
     checkList(data.message);
}
function checkList(breedList){
    Object.keys(breedList).forEach((breed)=>{
        document.querySelector('#search-box').innerHTML += `
        <option >${breed}</option>
        `;
    })
}
dogImg()

async function loadBreed(){
 let response = await fetch(`https://dog.ceo/api/breed/${val.value}/images/random`)
 let data = await response.json();
 console.log(data.message)
 document.querySelector('.img-section').innerHTML = `
   <img src=${data.message} alt="" srcset="">
 `
}
btn.addEventListener('click',()=>{
    if(val.value !== 'choose a breed'){
        loadBreed();
    }
})
