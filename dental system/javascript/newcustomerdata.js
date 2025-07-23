export const CustomerData = [];





console.log(CustomerData)




const signup_btn = document.querySelector('.js-signup-btn');


signup_btn.addEventListener('click',(event)=>{
    event.preventDefault();
    const Customer_Email = document.querySelector('.js-email');
    const password_input = document.querySelector('.js-password');
    

    if (Customer_Email || password_input){
        const customer = ({
        email: Customer_Email.value,
        password: password_input.value
    
    });

    localStorage.setItem('customerData', JSON.stringify(customer));

    window.location.href = 'dental.html';
    }else{
        console.log('Email input not found')
    }
})