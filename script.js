document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('img01');

    function openMenu() {
        sidebar.classList.add('active');
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    }

    function closeMenu() {
        sidebar.classList.remove('active');
        overlay.style.display = 'none';
        document.body.style.overflow = ''; // Re-enable scrolling
    }

    hamburger.addEventListener('click', function(event) {
        event.stopPropagation();
        if (sidebar.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close menu when clicking on the overlay
    overlay.addEventListener('click', closeMenu);

    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && sidebar.classList.contains('active')) {
            closeMenu();
        }
    });

    // Image modal functionality
    window.openModal = function(img) {
        modal.style.display = "block";
        modalImg.src = img.src;
    }

    window.closeModal = function() {
        modal.style.display = "none";
    }

    // Close modal when clicking outside the image
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    }
});
