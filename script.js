// --Receive an error message when the form is submitted if:--
//// --The input field is empty--  
//// --The email address is not formatted correctly--

document.addEventListener('DOMContentLoaded', () => {

    //Get a reference to the emailInput,'.submit-btn','.error-message','.error-icon'
    // and '.sign-up' form
    const emailInput = document.getElementById('email');  
    const form = document.querySelector('.sign-up');
    const errorMessage = document.querySelector('.error-message');
    const errorIcon = document.querySelector('.error-icon');

    //Add an event listener to handle form submission
    form.addEventListener('submit', (event) => {
        //if input is not valid, call the showError function
        if (!emailInput.validity.valid) {
            showError();

            //Stop form submission
            event.preventDefault();
        }

    });

    //Add an event listener to the email input for any input event
    emailInput.addEventListener('input', (event) => {

        //If input is valid, remove the error classes
        if (emailInput.validity.valid) {
            if (form.classList.contains('error')) {
                form.classList.remove('error');
            }

            errorMessage.style.display = 'none';
        }

    });

    //Define showError function
    function showError() {

        //valueMissing
        if (emailInput.validity.valueMissing) {
            errorMessage.textContent = 'Please enter an email address';
        }
        //typeMismatch
        else if (emailInput.validity.typeMismatch) {
            errorMessage.textContent = 'Please provide a valid email';
        }

        //tooShort
        else if (emailInput.validity.tooShort) {
            errorMessage.textContent = 'Email is too short'
        }

        //Add the error class to the form
        form.classList.add('error');

        //Display the errorMessage
        errorMessage.style.display = 'block';
    }

});