window.onload=function(){
var btn = document.getElementById('submitBtn');
btn.addEventListener('click',checkPattern);
}

checkPattern = (e)=>{
    e.preventDefault();
    var userValue=document.getElementById('userBox').value;
    var emailValue=document.getElementById('emailBox').value;
    var passwordValue=document.getElementById('passwordBox').value;
    var cpasswordValue=document.getElementById('cpasswordBox').value;


    var msgForUser=document.getElementById('userNameMsg');
    var msgForEmail=document.getElementById('emailMsg');
    var msgForPassword=document.getElementById('passwordMsg');
    var msgForCpassword=document.getElementById('cpasswordMsg');
    

    if(userValue=="" || userValue.length<=2 || userValue.length>20){

        msgForUser.innerText="**Username length should be between 2 to 20";
        msgForUser.style.visibility="visible";
    }
    if(emailValue==""){
        msgForEmail.innerText="**Email field should not be empty";
        msgForEmail.style.visibility="visible";
    }
    if(emailValue.charAt(emailValue.length-4)!='.' && emailValue.charAt(emailValue.length-3)!='.')
    {
        
        msgForEmail.innerText="**Please enter a valid mail";
        msgForEmail.style.visibility="visible";
    }
    
    if(passwordValue==""){
        msgForPassword.innerText="**Password field should not be empty";
        msgForPassword.style.visibility="visible";
    }
    if(cpasswordValue==""){
        msgForCpassword.innerText="*This field should not be empty";
        msgForCpassword.style.visibility="visible";
    }
    
    if(passwordValue.length<=2 || passwordValue.length>20){

        msgForPassword.innerText="**Password length should be between 2 to 20";
        msgForPassword.style.visibility="visible";
    }
    
    if( cpasswordValue.length<=2 || cpasswordValue.length>20){

        msgForCpassword.innerText="**Confirm password length should be betwe en 2 to 20";
        msgForCpassword.style.visibility="visible";
    }
    if(passwordValue!=cpasswordValue){
        
        msgForCpassword.innerText="**Passwords are not equal";
        msgForCpassword.style.visibility="visible";
    }
}