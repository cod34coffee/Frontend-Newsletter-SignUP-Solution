// This is the success.js file that handles displaying the user's email on the success page.

// This function runs when the window (the entire webpage) has fully loaded.
window.onload = function() {
    // URLSearchParams is used to retrieve query parameters from the URL (e.g., "?email=someone@example.com").
    const params = new URLSearchParams(window.location.search);

    // The 'email' parameter is extracted from the URL.
    const email = params.get('email');

    // If an email is found in the URL, it gets inserted into the 'userEmail' span in the HTML.
    if (email) {
        document.getElementById('userEmail').innerText = decodeURIComponent(email); 
        // decodeURIComponent is used to convert the encoded email (like '%40' for '@') into its original format.
    }
};
