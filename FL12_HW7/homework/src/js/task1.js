let userEmail = 0, userPassword = 0, passwordChangeConfirm = 0, oldPasswordConfirm = 0,
newPasswordConfirm = 0, emailLength = 5, passwordLength = 6;

userEmail = prompt('Please enter your email');

if(!userEmail) {
    alert('Canceled');
} else if(userEmail.length < emailLength) {
    alert('I don’t know any emails having name length less than 5 symbols');
} else if(userEmail === 'user@gmail.com' || userEmail === 'admin@gmail.com') {
    userPassword = prompt('Please enter your password');
    if(!userPassword) {
        alert('Canceled');
    } else if(userEmail === 'user@gmail.com' && userPassword === 'UserPass' || userEmail === 'admin@gmail.com' 
    && userPassword === 'AdminPass') {
        passwordChangeConfirm = confirm('Do you want to change your password?');
        if(!passwordChangeConfirm) {
            alert('You have failed the change.');
        } else {
            oldPasswordConfirm = prompt('Please enter your old password');
            if(!oldPasswordConfirm) {
                alert('Canceled');
            } else if(userEmail === 'user@gmail.com' && oldPasswordConfirm === 'UserPass' 
            || userEmail === 'admin@gmail.com' && oldPasswordConfirm === 'AdminPass') {
                userPassword = prompt('Please enter your new password');
                if(!userPassword) {
                    alert('Canceled');
                } else if(userPassword.length < passwordLength) {
                    alert('It’s too short password. Sorry.');
                } else {
                    newPasswordConfirm = prompt('Please enter your new password again');
                    if(!newPasswordConfirm) {
                        alert('Canceled');
                    } else if(newPasswordConfirm !== userPassword) {
                        alert('You wrote the wrong password.');
                    } else {
                        alert('You have successfully changed your password.');
                    }
                }
            } else {
                alert('Wrong password');
            }
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}






    
    
    
 