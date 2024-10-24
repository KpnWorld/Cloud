document.addEventListener('DOMContentLoaded', function() {
    // Enable smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the link is an internal link (same-page anchor)
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // If the section exists, prevent the default behavior and enable smooth scroll
                e.preventDefault();
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
                    behavior: 'smooth'
                });
            } else {
                // If the section doesn't exist (external page), allow default navigation
                window.location.href = this.getAttribute('href');
            }
        });
    });

    // Highlight the active link
    window.addEventListener('load', highlightActiveLink);
    window.addEventListener('hashchange', highlightActiveLink);

    function highlightActiveLink() {
        const currentPath = window.location.pathname.split('/').pop();
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPath || href === '#' + currentPath.split('.')[0]) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
});


    // Contact form validation
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function(e) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            e.preventDefault();
            alert('Please fill in all fields.');
        } else {
            alert('Thank you for your message!');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    console.log('Welcome to KpnWorld!');

    // Form validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                event.preventDefault();
            }
        });
    }
});

