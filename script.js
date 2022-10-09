
//typing animation
let typed = new Typed(".demo", {
    strings: ["Muhammadjamiu", "Web And Mobile Developer","Search Engine Optimization", "Blogger"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  })



window.addEventListener("scroll",reveal)

function reveal(){
    var reveals=document.querySelectorAll(".reveal")

    for (var i = 0 ; i < reveals.length ;i++){
        var windowh=window.innerHeight;
        var revealt=reveals[i].getBoundingClientRect().top;
        var revealp=20;

        if(revealt < windowh - revealp){
            reveals[i].classList.add("active")
        
        }
        else{
            reveals[i].classList.remove("active")
            
        }
    }
}


let counts=setInterval(updated);
let upto=0;
function updated(){

    
    var count1= document.getElementById("counter3");
    count1.innerHTML=++upto;
    if(upto===100,000)
    {
        clearInterval(counts);
    }

}


function wow(){
    
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.value.match(validRegex)){
        document.getElementById("subscribe").disabled=false
    }else{
        document.getElementById("subscribe").disabled=true
    }
}

function wowbtn2(){
    
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailstart.value.match(validRegex)){
        document.getElementById("email-start-send").disabled=false
    }else{
        document.getElementById("email-start-send").disabled=true
    }
}


var emailStartSend=document.getElementById("email-start-send")
var emailstart = document.getElementById("email-start")
var email=document.getElementById("email-news")
var modal=document.getElementById("one")
var overlay1=document.getElementById("over1")
var overlay2=document.getElementById("over2")
var sub=document.getElementById("subscribe")
var modal1 = document.getElementById('modal1');
var modal2 = document.getElementById('modal2');
var emailvalue1=document.getElementById("emailvalue1")
var emailvalue2=document.getElementById("emailvalue2")


sub.addEventListener("click" , () => {
    overlay1.classList.add("valid")
    document.getElementById("bodys").classList.add("valid")
    setTimeout(() => {
        document.getElementById("bodys").classList.remove("valid")
        emailvalue1.innerHTML=email.value
        overlay1.classList.add("invalid")
        email.value=""
        document.getElementById("subscribe").disabled=true
        modal1.style.display="block"
    }, 6000);
})


window.addEventListener("load",() => {
    document.getElementById("over2").classList.add("valid")
    // document.getElementById("body").classList.add("valid")
    setTimeout(()=>{
        document.getElementById("over2").classList.remove("valid")
        document.getElementById("body").classList.add("valid")
    },3000)
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

emailStartSend.addEventListener("click" , () => {
    overlay2.classList.add("valid")
    setTimeout(() => {
        emailvalue2.innerHTML=emailstart.value
        overlay2.classList.add("invalid")
        emailstart.value=""
        document.getElementById("email-start-send").disabled=true
        modal2.style.display="block"
    }, 6000);
})



// sub.addEventListener("click",() =>  {
//     if (email.value == "" ){
//         email.classList.add("invalid")
//     }else if(email.value.length < 5){
//         email.classList.add("invalid")
//     }else if(email.value.length > 7){
//         email.classList.remove("invalid")
//     }
// })









// var check=document.getElementById("checked")
// check.addEventListener("click",() => {
//     check.classList.toggle("valid")
// })