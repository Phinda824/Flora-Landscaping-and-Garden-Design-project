// Get all images and the modal
const images = document.querySelectorAll('.gal-cards img');
const modal = document.createElement('div');
modal.classList.add('modal');
const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');
modal.appendChild(modalContent);
document.body.appendChild(modal);

images.forEach(image => {
    image.addEventListener('click', () => {
        modalContent.innerHTML = ''; // Clear previous content
        const fullSizeImage = new Image();
        fullSizeImage.src = image.src;
        fullSizeImage.alt = image.alt;
        modalContent.appendChild(fullSizeImage);
        modal.style.display = 'block';
    });
});

// Close the modal when clicking outside the image
modal.addEventListener('click', () => {
    modal.style.display = 'none';
});
