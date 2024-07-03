let chars ='abcdefghijklmnopqrstuvyz' ,randomChars='',pass;
let bigChars='ABCDEFGHIJKLMNOPQRSTUVYZ',nums ='123456789' ,specialChars ='@$%&*!#?' ;

const btn = document.querySelector(".generate-btn");
let inputPass = document.querySelector(".text");
    

    btn.addEventListener('click',()=>{
        for(i=0;i<2;i++){
            randomChars += chars.charAt(Math.floor(Math.random() * chars.length)) ;
            randomChars += bigChars.charAt(Math.floor(Math.random() * bigChars.length)) ;
            randomChars += nums.charAt(Math.floor(Math.random() * nums.length)) ;
            randomChars += specialChars.charAt(Math.floor(Math.random() * specialChars.length)) ;
            
        }
         inputPass.textContent = randomChars;
        //inputPass.innerHTML = randomChars;
        randomChars = '';
    })
