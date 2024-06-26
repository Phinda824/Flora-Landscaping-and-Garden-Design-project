
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


