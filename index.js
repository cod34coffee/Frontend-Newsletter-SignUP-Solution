// This is the file for the index.js that will be attached to the index.html file.

function checkEmail(){ 
    // This function adds an event listener to the form to validate the email input when the form is submitted.

    document.getElementById('email-signup').addEventListener('submit', function(event){
        event.preventDefault(); 
        // Prevents the default form submission behavior so that we can validate the email first.

        const input = document.getElementById('email'); 
        // Retrieves the email input field by its ID.
        const formText = document.getElementById('validEmailAddress'); 
        // Retrieves the span element used to display the validation message.
        const checkRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
        // Regular expression to validate the email format.

        if(input.value.match(checkRegex)){ 
            // If the email input matches the regular expression (valid email format):
            
            input.classList.remove('inputClass'); 
            input.classList.add('valid'); 
            // Removes the default class and adds the 'valid' class to style the input field.
            
            input.placeholder = 'Valid email'; 
            // Changes the placeholder text to indicate that the email is valid.
            
            window.location.href = `success.html?email=${encodeURIComponent(input.value)}`; 
            // Redirects the user to a success page and passes the email as a URL parameter.
            
            input.value = ''; 
            // Clears the input field.

        }else if(!input.value){ 
            // If the email input is empty:

            formText.classList.remove('hidden'); 
            formText.classList.add('validEmailAddress'); 
            // Displays the validation message by removing 'hidden' and adding 'validEmailAddress' class.

            input.classList.remove('inputClass'); 
            input.classList.add('invalid'); 
            // Removes the default class and adds the 'invalid' class to style the input field as invalid.

            input.placeholder = 'Invalid email'; 
            // Changes the placeholder text to indicate the email is invalid.

            input.value = ''; 
            // Clears the input field.

        }else if(!input.value.includes('@')){ 
            // If the email input is missing the '@' character:

            formText.classList.remove('hidden'); 
            formText.classList.add('validEmailAddress'); 
            // Displays the validation message.

            input.classList.remove('inputClass'); 
            input.classList.add('invalid'); 
            // Styles the input field as invalid.

            input.placeholder = 'Invalid email'; 
            // Changes the placeholder text to indicate the email is invalid.

            input.value = ''; 
            // Clears the input field.

        }else if(!input.value.includes('.')){ 
            // If the email input is missing the '.' character:

            formText.classList.remove('hidden'); 
            formText.classList.add('validEmailAddress'); 
            // Displays the validation message.

            input.classList.remove('inputClass'); 
            input.classList.add('invalid'); 
            // Styles the input field as invalid.

            input.placeholder = 'Invalid email'; 
            // Changes the placeholder text to indicate the email is invalid.

            input.value = ''; 
            // Clears the input field.

        }else{ 
            // If the email input doesn't match any of the above conditions but is still invalid:

            formText.classList.remove('hidden'); 
            formText.classList.add('validEmailAddress'); 
            // Displays the validation message.

            input.classList.remove('inputClass'); 
            input.classList.add('invalid'); 
            // Styles the input field as invalid.

            input.placeholder = 'Invalid email'; 
            // Changes the placeholder text to indicate the email is invalid.

            input.value = ''; 
            // Clears the input field.
        }
    });
}

checkEmail(); 
// Calls the checkEmail function to activate the form validation when the script runs.
