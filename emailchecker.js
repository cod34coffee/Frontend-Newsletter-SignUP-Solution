// Asynchronous function to validate the email using ZeroBounce's API
async function validateEmail(email, apiKey) {
    // Constructing the URL for the ZeroBounce API call with the provided API key and email
    const url = `https://api.zerobounce.net/v2/validate?api_key=${apiKey}&email=${email}`;

    try {
        // Making an asynchronous fetch request to the ZeroBounce API
        const response = await fetch(url);
        // Parsing the response into a JSON object
        const data = await response.json();

        // Getting the email input element from the DOM
        const input = document.getElementById('email');

        // If the API returns that the email is valid
        if (data.status === 'valid') {
            // Remove any existing class and add a 'valid' class for styling
            input.classList.remove('inputClass');
            input.classList.add('valid');
            // Change the placeholder text to indicate a valid email
            input.placeholder = 'Valid email';

            /*
            If you want to see the API response in the console (for debugging),
            you can comment out the redirection below, 'window.location.href = `success.html?email=${encodeURIComponent(email)}`;',  so you don't leave the current page.
            */
            window.location.href = `success.html?email=${encodeURIComponent(email)}`;

            // Clear the email input field after redirection
            document.getElementById('email').value = '';

            // Uncomment the line below to log the API response for debugging purposes, and if you want to see what information that the API collects from email, but make sure that the webpage doesn't redirect you to the next page so you can see the API information in the console.log.// 
            // console.log(data);
        } else {
            /*
            Uncomment the line below to log the API response in case the email is invalid,
            so you can see why it was flagged as invalid.
            */
            // console.log(data);
            // Call the function to handle an invalid email
            handleInvalidEmail();
        }
    } catch (error) {
        // Log any errors that occur during the fetch request
        console.error('Error validating email:', error);

        // Handle the error by treating it as an invalid email
        handleInvalidEmail();
    }
}

// Function to handle an invalid email (e.g., display error styles and messages)
function handleInvalidEmail() {
    // Get the email input element and a message element from the DOM
    const input = document.getElementById('email');
    const formText = document.getElementById('validEmailAddress');
    
    // Show the error message by removing the 'hidden' class
    formText.classList.remove('hidden');
    // Add a class to style the error message (it's a red color or similar)
    formText.classList.add('validEmailAddress');
    
    // Add an 'invalid' class to the input for styling (e.g., red border)
    input.classList.add('invalid');
    // Change the placeholder to indicate an invalid email
    input.placeholder = 'Invalid email';
    // Clear the email input field
    input.value = '';
}

// Function to initiate the email validation process
function checkEmailNow() {
    // Your API key for the ZeroBounce API
    const apiKey = 'Your API Key Here';
    // Get the email input element and retrieve the user's entered email
    const input = document.getElementById('email');
    const email = input.value;

    // If both the email and API key are available, call the email validation function
    if (email && apiKey) {
        validateEmail(email, apiKey);
    }
}

// Add an event listener to the form submission
// This prevents the default form submission and instead calls the email validation
document.getElementById('email-signup').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form behavior (e.g., page refresh)
    checkEmailNow(); // Start the email validation process
});
