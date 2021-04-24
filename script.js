//------------------- Start Register Functionality -----------------------------
function  register (){
    firstName = document.getElementById('FirstName').value  ;
    
    lastName = document.getElementById("LastName").value ;
    
    email = document.getElementById('Email').value ;
    
    mobileNo = document.getElementById('MobileNo').value ;
    
    password = document.getElementById('Password').value ;
    
    retypePassword = document.getElementById('RetypePassword').value ;
   
    if ( password === retypePassword ){
        document.getElementById('FirstName').value='';
        document.getElementById("LastName").value='';       
        document.getElementById('Email').value='' ; 
        document.getElementById('MobileNo').value='' ;
        document.getElementById('Password').value='';
        document.getElementById('RetypePassword').value='';
        document.getElementById('invalidPaswword').style.visibility= "hidden";
    }    

    else {
        document.getElementById('invalidPaswword').style.visibility= "visible";
    }
     if (userNameIsExist(email)){
        alert('this email is alredy exists');
    }
    else{
        var user = new User (firstName,lastName,mobileNo,password);
        localStorage.setItem(email,JSON.stringify(user));
    }
        
}


function userNameIsExist(email)
 {
 for(index = 0;index < localStorage.length;index++){
     
     if(localStorage.key(index) == email){
         return true;
     }
 }
 }
//------------------- Start Register Functionality -----------------------------


//------------------- Start login Functionality -----------------------------
document.getElementById('login').onclick = function(){
    user = document.getElementById('E-mail-login').value;
    password = document.getElementById('password-login').value; 
  
    if (confirmLogin(user,password))
    {
        alert("You Are Welcome");
        window.location.assign('index.html'); 

        localStorage.setItem('CurrentUserName',user);
    }
    else
    {
        document.getElementById('invalidE_mail').style.visibility= "visible";
    }
};



function confirmLogin(email,password)
{
   var result = localStorage.getItem(email);
   var user = JSON.parse(result);
   return user.password == password;
}
//------------------- End login Functionality -----------------------------

class User{
    constructor(firstName,lastName,mobileNo,password){
        this.firstName=firstName;
        this.lastName=lastName;
        this.mobileNo=mobileNo;
        this.password=password;
    }
}