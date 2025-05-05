
$('.contact-form').on('submit', function(e) {
    e.preventDefault();  
    console.log('Form submitted'); // Log form submission for debugging
    // Prevent the form from submitting

    let isValid = true;

    // Validate name
    const name = $('#name').val().trim();
    if (name === '') {
        $('#nameError').text('Name is required');
        isValid = false;
    }

    // Validate email
    const email = $('#email').val().trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        $('#emailError').text('Email is required');
        isValid = false;
    } else if (!emailPattern.test(email)) {
        $('#emailError').text('Invalid email format');
        isValid = false;
    }

    // Validate message
    const message = $('#message').val().trim();
    if (message === '') {
        $('#messageError').text('Message is required');
        isValid = false;
    }

    // If the form is valid, show success message and reset the form
    if (isValid) {
        // Show success message
        $('.contact-form').after('<div class="success-message">Form submitted successfully!</div>');
        $('.contact-form').trigger('reset'); // Reset the form
    } else {
        // Prevent form submission if there are errors
        e.preventDefault();
    }

    // Clear error messages on input focus
    $('#name, #email, #message').on('focus', function() {
        $(this).next('.error').text(''); // Clear the error message
    });
    setTimeout(function() {
        $('.success-message').fadeOut('slow', function() {
            $(this).remove(); // Remove the success message after fading out
        });
    }, 5000); // Change the time (in milliseconds) to adjust how long the message stays
});
//auto removal success message





