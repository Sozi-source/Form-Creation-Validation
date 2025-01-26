document.addEventListener('DOMContentLoaded', ()=> {
const form = document.getElementById ("registration-form")
// Feedback Div
const feedbackDiv = document.getElementById ("form-feedback")

form.addEventListener ('submit', (formContent) =>{
formContent.preventDefault()
})
// Retrieve User Inputs
const usernameInput = document.getElementById ("username")
const emailInput = document.getElementById ("email")
const passwordInput = document.getElementById ("password")

// Retrieve the values and trim whitespace
const username = usernameInput.value.trim ();
const email = emailInput.value.trim ();
const password = passwordInput.value.trim ();

// Initialize Validation Variables:
let isValid = true;
const messages = []

// Username Validation:
if ( usernameInput.length <3){
    isValid= false;
    messages.push ("username must be at least 3 character long")

}

// Email Validation:
if (!email.includes ('@') || !email.includes ('.')) {
    isValid = false;
    messages.push('email must include both "@" and "." characters')

}

// Password Validation:
if (password.length < 8){
    isValid = false ;
    messages.push ('password must be at least 8 character long')
}
// Feedback Display Logic
if (!isValid){
    feedbackDiv.style.display = 'block'
    feedbackDiv.innerHTML = messages.join ('<br>')
    feedbackDiv.style.color = '#dc3545'
} 
    else{
        feedbackDiv.style.display = 'block'
        feedbackDiv.textContent = "Registration successful!"
        feedbackDiv.style.color= '#28a745'
    }

})