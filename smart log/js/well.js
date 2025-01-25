let userName = localStorage.getItem("userName");
document.getElementById('welcome').innerHTML=`Welcome ${userName}`;

document.querySelector("#logOut").addEventListener('click',()=>{
    localStorage.removeItem('userName');
    location.href='./signIn.html'
})