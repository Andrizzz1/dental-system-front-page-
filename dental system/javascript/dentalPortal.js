

const storedCustomer = localStorage.getItem('customerData');
const CustomerData = storedCustomer ? JSON.parse(storedCustomer) : null;

const inputclick = document.querySelectorAll(".Js-Input-id, .Js-Input-password");

inputclick.forEach((input) =>{
    input.addEventListener('focus', ()=>{
        input.classList.add('active')
    })


    input.addEventListener('blur', () =>{
        setTimeout(()=>{
            input.classList.remove('active')
        })
    })



})

const newAcc = document.querySelector('.Js-newAcoount');

newAcc.addEventListener('click',() =>{
    window.location.href = 'CreateAccount.html';
})

const loginbtn = document.querySelector('.js-login-btn');

loginbtn.addEventListener('click',(event)=>{
    event.preventDefault();

    const emailInput = document.querySelector('.Js-Input-id');
    const passwordInput = document.querySelector('.Js-Input-password');

    if (!emailInput || !passwordInput || !CustomerData){
        alert('Something went wrong');
        return;
    }

    const enteredEmail = emailInput.value;
    const enteredPassword = passwordInput.value;

    if (
        enteredEmail === CustomerData.email && 
        enteredPassword === CustomerData.password
    ){
        window.location.href = 'dashboard.html';
    }else{
        alert('Invalid Credentials')
    }

    
  
})












