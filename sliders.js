let slides = document.querySelectorAll('.slides');
let next=document.querySelector('.next')
let prev = document.querySelector('.prev')

count=0;
slides.forEach((slide,index)=>{
 slide.style.left=`${index*100}%`;
})
next.addEventListener('click',()=>{
 if(count<slides.length-1)
   { count++;
     slideImg();}
    }
)
prev.addEventListener("click",()=>{
    if(count>0){
        count--;
        slideImg();
    }
})

let slideImg = ()=>{
    slides.forEach((slide,index)=>{
        console.log(index)
        slide.style.transform =`translateX(-${count*100}%)`
    })
}