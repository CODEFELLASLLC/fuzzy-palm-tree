function greetUser() {
    var name = document.getElementById('nameInput').value;
    if (name.trim() !== '') {
        var nameForm = document.getElementById('nameForm');
        var greeting = document.getElementById('greeting');
        var greetingMessage = document.getElementById('greetingMessage');
        var redirectMessage = document.getElementById('redirectMessage');

        greetingMessage.innerText = `Good day, ${name}!`;
        redirectMessage.innerText = "You will be redirected to our updated news page.";

        nameForm.classList.add('hidden'); // Fade out the form

        // Delay the display of the greeting by 1 second to allow the form to fade out
        setTimeout(function () {
            nameForm.style.visibility = 'hidden'; // Hide the form but keep its space
            greeting.classList.remove('hidden'); // Fade in the greeting
        }, 1000); // Match this delay with the CSS transition time
    } else {
        alert('Please enter your name.');
    }
}

function redirectToNews() {
    window.location.href = "newsUpdate.html";
}
