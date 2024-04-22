document.addEventListener('DOMContentLoaded', function() {
    const signInForm = document.querySelector('#signin-form');
    
    signInForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        
        if ((email.trim() === 'nitinrajput2003@gmail.com' && password.trim() === 'Nitin@0000') ||
            (email.trim() === 'priyadarsheekumar18@gmail.com' && password.trim() === 'Root@1234')) {
            alert('Sign in successful!');
            window.location.href = 'after-signin.html';
        } else {
            alert('Invalid email or password. Please try again.');
            signInForm.reset();
        }
    });
});
