let currentIndex = 0; // Current image index
    const slides = document.querySelector('.slides');
    const totalImages = slides.children.length; // Total number of images
    
    function showNextImage() {
        currentIndex = (currentIndex + 1) % totalImages; // Move to the next image
        const offset = -currentIndex * 100; // Calculate offset
        slides.style.transform = `translateX(${offset}%)`; // Move the slides
    }
    
    // Change image every 3 seconds
    setInterval(showNextImage, 3000);