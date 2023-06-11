const mails = document.getElementById("mail");
const passwords = document.getElementById("password");
const error = document.getElementById("email-error");
const errors = document.getElementById("email-error-1");
function check(){
    msg=[]
    if(!mails.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        error.innerHTML = "Please enter a valid email";
        alert("invalid mail id")
        return false;
    }
    if(!passwords.value.match(/^[A-Za-z]\w{7,14}$/)){
        errors.innerHTML = "Please enter a valid password";
        alert("invalid password")
        return false;
    }
}
