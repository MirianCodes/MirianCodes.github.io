

//script for scroll timeline
// Observe when timeline items come into view
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.timeline-item');

    // Observer callback function
    const handleIntersection = (entries, observerSelf) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observerSelf.unobserve(entry.target); // Stop observing once it's in view
            }
        });
    };

    // Options for the observer: trigger when 50% of the item is in view
    const observerOptions = {
        threshold: 0.5
    };

    // Create the IntersectionObserver instance
    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Add delay to each item and start observing
    items.forEach((item, index) => {
        // Add a staggered delay based on the item's index
        item.style.transitionDelay = `${index * 0.2}s`; // 0.2s delay for each subsequent item
        observer.observe(item);
    });
});
//script for scroll animation
const scrollToTopButton = document.getElementById("scrollToTopButton");
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
scrollToTopButton.addEventListener("click", scrollToTop);
//Contact form validation
$(document).ready(function() {
    $('.contact-form').on('submit', function(e) {
        e.preventDefault();  // Prevent the form from submitting

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
    });
});




  
