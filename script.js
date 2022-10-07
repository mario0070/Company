
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
var overlay=document.getElementById("over")
var sub=document.getElementById("subscribe")
var modal = document.getElementById('id01');
var emailvalue=document.getElementById("emailvalue")


sub.addEventListener("click" , () => {
    overlay.classList.add("valid")
    setTimeout(() => {
        emailvalue.innerHTML=email.value
        overlay.classList.add("invalid")
        email.value=""
        document.getElementById("subscribe").disabled=true
        modal.style.display="block"
    }, 6000);
})


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

emailStartSend.addEventListener("click" , () => {
    overlay.classList.add("valid")
    setTimeout(() => {
        emailvalue.innerHTML=emailstart.value
        overlay.classList.add("invalid")
        emailStartSend.value=""
        document.getElementById("subscribe").disabled=true
        modal.style.display="block"
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