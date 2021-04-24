$(document).ready(function(){
    if(localStorage.getItem('CurrentUserName') == null){
        window.location.assign('login.html');
    }



    let currentUserName = localStorage.getItem('CurrentUserName');
    let userData = localStorage.getItem(currentUserName);
    let user = JSON.parse(userData);;
    
    document.getElementById('first-name').value = user.firstName;
    document.getElementById('last-name').value = user.lastName;
    document.getElementById('mobile-number').value = user.mobileNo;
    document.getElementById('e-mail').value = currentUserName;




    $('#save-changes').click(function(){
        firstName = $('#first-name').val();
        lastName = $('#last-name').val();
        mobileNo = $('#mobile-number').val();
        email = $('#e-mail').val();
        currentPassword = $('#current-password').val();
        newPassword = $('#new-password').val();
        confirmPassword = $('#confirm-password').val();

        if(firstName == '' || lastName == '' || mobileNo == '' || email == ''){
            alert('One or more Fields are empty');
        }
        else{
            let currentUserData = localStorage.getItem(currentUserName);
            if(currentPassword == '' || JSON.parse(currentUserData).password != currentPassword){
                alert('Please Type your Current Password Correctly to make sure that you are account owner');
                return;
            }
            
            if(newPassword != '' || confirmPassword != ''){
                if(newPassword != confirmPassword){
                    alert('New Password does not match confirm password');
                    return;
                }
            }

            localStorage.removeItem(currentUserName);
            var currentuser = JSON.parse(currentUserData);
            if(newPassword != ''){
                var newUser = new User (firstName,lastName,mobileNo,newPassword);
            }
            else{
                var newUser = new User (firstName,lastName,mobileNo,currentuser.password);
            }
            
            localStorage.setItem(email,JSON.stringify(newUser));
            localStorage.setItem('CurrentUserName',email);
            location.reload();
        }
    });



    $('#logout').click(function(){
        localStorage.removeItem('CurrentUserName');
    });









    class User{
        constructor(firstName,lastName,mobileNo,password){
            this.firstName=firstName;
            this.lastName=lastName;
            this.mobileNo=mobileNo;
            this.password=password;
        }
    }





});