document.getElementById('extendedForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get the values from the form fields
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Perform basic validation
    if (email === '' || message.length < 150) {
        document.getElementById('feedback').textContent = 'Please enter a valid email and a message with at least 150 characters.';
        document.getElementById('feedback').style.color = 'red';
    } else {
        // Display a success message
        document.getElementById('feedback').textContent = 'Form submitted successfully!';
        document.getElementById('feedback').style.color = 'green';

        // Optionally, reset the form
        document.getElementById('extendedForm').reset();
        document.getElementById('charCount').textContent = '0/150 characters';
    }
});

document.getElementById('message').addEventListener('input', function() {
    const messageLength = this.value.length;
    document.getElementById('charCount').textContent = `${messageLength}/150 characters`;
});