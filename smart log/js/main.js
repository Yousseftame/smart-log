function validation() {
    userNameValidation();
    emailValidation();
    passwordValidation();
    if (userNameValidation()==true && emailValidation() == true && passwordValidation() == true) {
        return true
    }
    else
    {
        return false
    }
}
//name validation regex = /^[A-Za-z]{3,7}(\s?[A-Za-z]{3,7})?$/;
//email validation  regex =/@[a-z]{5,10}(\.com)$/;
//password validation regex = /^.{5,15}$/;

// -----------------------------------------
let signUpName =document.getElementById("signUpName");
let signUpEmail =document.getElementById("signUpEmail");
let signUpPassword =document.getElementById("signUpPassword");
let users=[];

if (localStorage.getItem('users')!==null) {
    users=JSON.parse(localStorage.getItem('users'));
}else
{
    users=[];
}
    
    document.querySelector("#btnSignUp").addEventListener('click',function () {
        if (nameValidation()==true && emailValidation()==true&&passwordValidation()==true) {
            let obj={
                name:signUpName.value,
                email:signUpEmail.value,
                password:signUpPassword.value
            }
        //  for (let i = 0; i < users.length; i++) {
        //         if (users[i].email==signUpEmail) {
        //             document.querySelector("#isExist").classList.remove("d-none");
                // }else{   
                    users.push(obj);
                    localStorage.setItem('users',JSON.stringify(users));
                    // location.href='./signIn.html'
                    document.querySelector("#isExist").classList.add("d-none");
                    document.querySelector("#cnfMsg").classList.remove("d-none");
            //     }
            // }
        }

        else{
            if (nameValidation()==false) {
                document.getElementById("nameInvalid").classList.remove('d-none');
            }else{
                document.getElementById("nameInvalid").classList.add('d-none');
            }
            if (emailValidation()==false) {
                document.getElementById("emailInvalid").classList.remove('d-none');
            }else{
                document.getElementById("emailInvalid").classList.add('d-none');
            }
            if (passwordValidation()==false) {
                document.getElementById("passwordInvalid").classList.remove('d-none');
            }else{
                document.getElementById("passwordInvalid").classList.add('d-none');
            }
             if (nameValidation()==false && emailValidation()==false&&passwordValidation()==false) {
                document.getElementById("tryAgain").classList.remove('d-none');
             }else{
                document.getElementById("tryAgain").classList.add('d-none');
             }
        }
    });

function nameValidation(){
    let rgx=/^[A-Za-z]{3,7}(\s?[A-Za-z]{3,7})?$/;
    if (rgx.test(signUpName.value)) {
        return true;
    }
    else{
        return false;
    }
}
function emailValidation(){
    let rgx=/@[a-z]{4,}(\.com)$/;
    if (rgx.test(signUpEmail.value)) {
        return true;
    }
    else{
        return false;
    }
}
function passwordValidation(){
    let rgx=/^.{5,15}$/;
    if (rgx.test(signUpPassword.value)) {
        return true;
    }
    else{
        return false;
    }
}
