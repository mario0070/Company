var forms= document.getElementById("none")
var over=document.getElementById("overlay")
var body=document.getElementById("body")
window.addEventListener("load",()=>{
    over.classList.add("valid")
    body.classList.add("valid")
   setTimeout(()=>{
    over.classList.remove("valid")
    forms.classList.add("valid")
    body.classList.remove("valid")
   },2000)
})

var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var validRegex1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+[0-9-]+(?:\.[0-9-]+)*$/;
var validRegex2 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   
function validation1(){
    var fname=document.getElementById("fname")

    if(fname.value == ""){
        fname.classList.add("valid")
    }else if(fname.value.length <= 2){
        fname.classList.add("valid")
    }else if(fname.value.match(validRegex1)){
        fname.classList.add("valid")
    }else{
        fname.classList.remove("valid")
    }
}

function validation2(){
    var lname=document.getElementById("lname")

    if(lname.value.match(validRegex1)){
        lname.classList.add("valid")
    }else if(lname.value.length <= 2){
        lname.classList.add("valid")
    }else{
        lname.classList.remove("valid")
    }
}

function validation3(){
    var email=document.getElementById("email")

    if(email.value.match(validRegex)){
        email.classList.remove("valid")
    }else{
        email.classList.add("valid")
    }
}


function validation4(){
    var address=document.getElementById("address")

    if(address.value.length <= 9){
        address.classList.add("valid")
    }else{
        address.classList.remove("valid")
    }
}

function validation5(){
    var pass1=document.getElementById("pass1")

    if(pass1.value.length >=6){
        pass1.classList.remove("valid")
    }else{
        pass1.classList.add("valid")
    }
}

function validation6(){
    var pass1=document.getElementById("pass1")
    var pass2=document.getElementById("pass2")

    if(pass1.value != pass2.value){
        pass2.classList.add("valid")
        pass1.classList.add("valid")
    }else{
        pass2.classList.remove("valid")
        pass1.classList.remove("valid")
    }
}

function reset(){
    var reset=document.getElementById("reset")
    if(fname.value || lname.value || email.value || pass1.value || pass2.value  || address.value != "" ){
        fname.value=""
        lname.value=""
        email.value=""
        address.value=""
        pass1.value=""
        pass2.value=""
    }else{
        fname.value="mumu"
        lname.value="idiot"
    }

    
}


function togglePass(){
    if(pass1.type =="password"){
        pass1.type="text"
    }else{
        pass1.type="password"
    }
    if(pass2.type =="password"){
        pass2.type="text"
    }else{
        pass2.type="password"
    }
}


function enableBtn(){
    if(fname.value && lname.value && email.value && pass1.value && pass2.value  && address.value != "" && (pass1.value == pass2.value) && (email.value.match(validRegex)) && (address.value.length >= 10) && (lname.value.length >= 3) && (fname.value.length >= 3) ){
        document.getElementById("continue").disabled=false
    }else{
        document.getElementById("continue").disabled=true
    }

    
}


var spinner=document.getElementById("spinner")
var continues=document.getElementById("continue")
var continue1=document.getElementById("continue1")
var names=document.getElementById("name")
var header=document.getElementById("header")
var fullname=document.getElementById("fullname")
var submitPay=document.getElementById("submitPay")
continues.addEventListener("click",() => {
     continue1.classList.remove("valid")
    setTimeout(()=>{
        spinner.classList.add("valid")
        continue1.classList.add("valid")
        header.classList.add("valid")
        names.innerText=fname.value + " "  + lname.value
        fullname.value=fname.value + " "  + lname.value
        document.getElementById("continue").disabled=true
       },9000)
})


function formatString(e) {
    var inputChar = String.fromCharCode(event.keyCode);
    var code = event.keyCode;
    var allowedKeys = [8];
    if (allowedKeys.indexOf(code) !== -1) {
      return;
    }
  
    event.target.value = event.target.value.replace(
      /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
    ).replace(
      /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
    ).replace(
      /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
    ).replace(
      /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
    ).replace(
      /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
    ).replace(
      /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
    ).replace(
      /\/\//g, '/' // Prevent entering more than 1 `/`
    );
  }
