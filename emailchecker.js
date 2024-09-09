async function validateEmail(email,apiKey) {
    const url = `https://api.zerobounce.net/v2/validate?api_key=${apiKey}&email=${email}`;

    try{
        const response = await fetch(url);
        const data = await response.json();

        const input = document.getElementById('email');

        if(data.status === 'valid'){
            input.classList.remove('inputClass');
            input.classList.add('valid');
            input.placeholder = 'Valid email';
            window.location.href = `success.html?email=${encodeURIComponent(email)}`;

            document.getElementById('email').value = '';


        }else{
            handleInvalidEmail();
        }
    }catch(error){
        console.error('Error validating email:', error);
        handleInvalidEmail();
    }
}

function handleInvalidEmail(){
    const input = document.getElementById('email');
    const formText = document.getElementById('validEmailAddress');
    formText.classList.remove('hidden');
    formText.classList.add('validEmailAddress');
    input.classList.add('invalid');
    input.placeholder = 'Invalid email';
    input.value = '';
}

function checkEmailNow(){
    const apiKey = 'bab65f2aaaa04384b87a336d759cf52b';
    const input = document.getElementById('email');
    const email = input.value;

    if (email && apiKey){
        validateEmail(email,apiKey);
    }
}

document.getElementById('email-signup').addEventListener('submit', function(event){
    event.preventDefault();
    checkEmailNow();
} );