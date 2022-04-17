const nameElem=document.getElementById('names')
const email=document.getElementById('emails')
const password=document.getElementById('pass')
const confirmPassWord=document.getElementById('confirm-password')
const buttonElem=document.getElementById('sub-btn')
//geting entireform
const entireForm=document.querySelector('form')
const nameField=document.getElementById('nameField')
const emailFiled=document.getElementById('emailField')
const passw=document.getElementById('passw')
const confPass=document.getElementById('conf-pass')

entireForm.addEventListener('submit', submitForm)
//uttonElem.addEventListener('click',buttonclick)
// this is for input border class for showing the border in red color
 
 
 
 function submitForm(e){
     e.preventDefault()

     if(nameElem.value=== ""){
        console.log("name is empty")
        nameElem.classList="error"
        nameField.classList="display"
    }else{
        nameElem.classList="success"
    }

     if (email.value === ""){
     console.log("email is empty")
     email.classList="error"
     emailFiled.classList="display"
     
   }else{
    email.classList="success" 
   }
   

   if(password.value=== ""){
     console.log("password is empty")
     password.classList="error"
     passw.classList="display"
   }else{
    password.classList="success" 
   }

   
   if(confirmPassWord.value=== ""){
     console.log("confirm password is empty")
     confirmPassWord.classList="error"
     confPass.classList="display"
   }else{
    confirmPassWord.classList="success"
   }


   }