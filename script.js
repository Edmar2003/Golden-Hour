document.addEventListener('DOMContentLoaded', function() {
    // Gallery More/Less Button Functionality
    const moreButton = document.getElementById('moreButton');
    const moreGallery = document.getElementById('moreGallery');
    
    if (moreButton && moreGallery) {
        moreButton.addEventListener('click', function() {
            if (moreGallery.style.display === 'none' || moreGallery.style.display === '') {
                moreGallery.style.display = 'grid';
                moreButton.textContent = 'Show Less';
                // Smooth scroll to bottom of gallery
                moreGallery.scrollIntoView({ behavior: 'smooth', block: 'end' });
            } else {
                moreGallery.style.display = 'none';
                moreButton.textContent = 'Show More';
                // Smooth scroll to gallery section
                document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
