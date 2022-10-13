var passIcon=document.getElementById("passicon")
var emailIcon=document.getElementById("emailicon")
var email=document.getElementById("email")

function valid(){
    if(email.value.length <= 7 ){
        emailIcon.classList.add("valid")
    }else{
        emailIcon.classList.remove("valid")
    }
}