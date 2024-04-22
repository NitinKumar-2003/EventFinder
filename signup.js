document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.querySelector('#signup-form');
    
    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const username = document.querySelector('#username').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        
        
        if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }
        
        alert('Sign up successful!');
        
        signUpForm.reset();
    });
});
