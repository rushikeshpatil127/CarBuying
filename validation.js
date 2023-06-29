const nameError=document.getElementById("name-error")
const lname=document.getElementById("lname-error")
const mobileError=document.getElementById("mobile-error")
const ageError=document.getElementById("age-error")
const passwordError=document.getElementById("password-error")
const emailError=document.getElementById("email-error")


function formValidation(){
    if(nameValidation()){
        return true;
    }
    return false;

}

function nameValidation(){
    const name=document.getElementById("inputName").value
    if(name.length<3){
        nameError.innerHTML='<i class="fa-sharp fa-solid fa-triangle-exclamation mx-2"  style="color: #af1504;"></i>please enter valid name'
        return  false;
    }
    if(name.length>10){
        nameError.innerHTML='<i class="fa-sharp fa-solid fa-triangle-exclamation mx-2"  style="color: #af1504;"></i>name is too lengthy'
        return  false;

    }

    else{
        nameError.innerHTML='<i class="fa-sharp fa-solid fa-circle-check mx-2"  style="color: #008528;"></i>'
        return true;
    }
}