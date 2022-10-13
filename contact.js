var names=document.getElementById("name")
var subject=document.getElementById("subject")
var textarea=document.getElementById("textarea")
var email=document.getElementById("email")
var send=document.getElementById("send")
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


function valid1(){
    if(names.value == "" || names.value.length <= 3){
        names.classList.add("valid")
    }else{
        names.classList.remove("valid")
    }
}

function valid2(){
    if(email.value.match(validRegex)){
        email.classList.remove("valid")
    }else{
        email.classList.add("valid")
    }
}

function valid3(){
    if(subject.value == "" || subject.value.length <= 3){
        subject.classList.add("valid")
    }else{
        subject.classList.remove("valid")
    }
}


function validall(){
    if(names.value && subject.value != "" && (email.value.match(validRegex)) && (subject.value.length >= 4) && (names.value.length >= 3) && (textarea.value != "") ){
        document.getElementById("send").disabled=false
    }else{
        document.getElementById("send").disabled=true
    }
}

var send = document.getElementById("send");
var user = document .getElementById("user")

send.addEventListener("click",()=>{
    user.innerText=names.value
    names.value=""
    email.value=""
    textarea.value=""
    subject.value=""

})




