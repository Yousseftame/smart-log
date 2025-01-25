let emailSignIn =document.getElementById("emailSignIn");
let passSignIn =document.getElementById("passSignIn");
let users=[]
if (localStorage!=null) {
    users = JSON.parse(localStorage.getItem('users'));
}

document.querySelector("#btnSignIn").addEventListener('click',()=>{
    for (let i = 0; i < users.length; i++) {
        if (emailSignIn.value ==users[i].email &&passSignIn.value == users[i].password) {
            let userName=users[i].name;
            localStorage.setItem("userName",userName);
            location.href='./well.html'
            break;
        }else{
            if (emailSignIn.value =="" ||passSignIn.value=="") {
                document.getElementById("fillInputs").classList.remove("d-none");
            }else{
                document.getElementById("fillInputs").classList.add("d-none");
            }
            if (emailSignIn.value !=""&&passSignIn.value != users[i].password) {
                document.getElementById("inCorrect").classList.remove("d-none");
            }else{
                document.getElementById("inCorrect").classList.add("d-none");
            }
        }
        
    }
})