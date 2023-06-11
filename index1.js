function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
const mails = document.getElementById("mail");
const passwords = document.getElementById("password");
const error = document.getElementById("email-error");
const errors = document.getElementById("email-error-1");
function check(){
    msg=[]
    if(names.value === " "){
        alert("enter input")
        return false;
    }
    if(!mails.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        error.innerHTML = "Please enter a valid email";
        alert("invalid mailid")
        return false;
    }
    if(!phone.value.match(/^\d{10}$/)){
        alert("enter correct number")
        return false;
    }
}
