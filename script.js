
// Wait until the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {

    // Select all elements with the class 'nav-link'
    const navLinks = document.querySelectorAll('.nav-link');

    // Select all elements with the class 'section'
    const sections = document.querySelectorAll('.section');

    // Loop through each navigation link
    navLinks.forEach(link => {

        // Add a click event listener to each navigation link
        link.addEventListener('click', function (event) {

            // Prevent the default action of the link (which is to navigate to the section)
            event.preventDefault();

            // Get the value of the 'data-target' attribute of the clicked link
            const targetId = this.getAttribute('data-target');
            
            // Loop through each section
            sections.forEach(section => {

                // If the section's ID matches the target ID, display it
                if (section.id === targetId) {
                    section.style.display = 'block';
                } 
                
                // Otherwise, hide the section
                else {
                    section.style.display = 'none';
                }
            });
        });
    });
});

// contact form
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            const label = this.parentElement.querySelector('label');
            label.style.top = '-10px';
            label.style.fontSize = '12px';
        });

        input.addEventListener('blur', function() {
            if (this.value === '') {
                const label = this.parentElement.querySelector('label');
                label.style.top = '50%';
                label.style.fontSize = '16px';
            }
        });

        // Check for initial values on page load
        if (input.value !== '') {
            const label = input.parentElement.querySelector('label');
            label.style.top = '-10px';
            label.style.fontSize = '12px';
        }
    });
});

