var passIcon=document.getElementById("passicon")
var emailIcon=document.getElementById("emailicon")
var passIconSuccess=document.getElementById("passicons")
var emailIconSuccess=document.getElementById("emailicons")
var email=document.getElementById("email")
var password=document.getElementById("password")
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;




function emailValidate(){
    if(email.value.match(validRegex)){
        emailIcon.classList.remove("valid")
        email.classList.remove("valid")
        emailIconSuccess.classList.add("valid")
    }else{
        emailIcon.classList.add("valid")
        email.classList.add("valid")
        emailIconSuccess.classList.remove("valid")
    }
}

function passValidate(){
    if(password.value.length <= 5 ){
        passIcon.classList.add("valid")
        passIconSuccess.classList.remove("valid")
        password.classList.add("valid")
    }else{
        passIcon.classList.remove("valid")
        password.classList.remove("valid")
        passIconSuccess.classList.add("valid")
    }
}

function btnValidate(){
     if(email.value.match(validRegex) && password.value.length >=6){
        document.getElementById("btn").disabled= false
     }else{
        document.getElementById("btn").disabled=true
     }
}

document.getElementById("btn").addEventListener("click",() => {
    document.getElementById("user").innerText= email.value
    email.value = ""
    password.value = ""
})