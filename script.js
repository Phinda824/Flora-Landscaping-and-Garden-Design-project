
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const inputs = document.querySelectorAll('input');
    const textArea = document.querySelectorAll('textarea');

    // Loop through each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');
            
            // Loop through each section
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.style.display = 'block';
                } 
                else {
                    section.style.display = 'none';
                }
            });
        });
    });

    //input
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

    //textarea 
    textArea.forEach(textarea => {
        textarea.addEventListener('focus', function() {
                const label = this.parentElement.querySelector('label');
                label.style.top = '-10px';
                label.style.fontSize = '12px';
        });
    
            textarea.addEventListener('blur', function() {
                if (this.value === '') {
                    const label = this.parentElement.querySelector('label');
                    label.style.top = '20%';
                    label.style.fontSize = '16px';
                }
            });
    });

});


