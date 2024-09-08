
/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*==================== scroll reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Media Buyer', 'Graphics Designer'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

/*==================== Toggle between dark mode and light mode ====================*/
const modeToggleBtn = document.getElementById('mode-toggle');
const modeIcon = document.getElementById('mode-icon');
const body = document.body;

// Function to update icon and background color based on mode, also change toggle color
const updateIcon = () => {
    if (body.classList.contains('light-mode')) {
        modeIcon.classList.replace('bx-sun', 'bx-moon'); // Light mode: show moon icon for dark mode selection
        modeToggleBtn.style.backgroundColor = '#f0f0f0'; // Light background for light mode
    } else {
        modeIcon.classList.replace('bx-moon', 'bx-sun'); // Dark mode: show sun icon for light mode selection
        modeToggleBtn.style.backgroundColor = '#1f242d'; // Dark background for dark mode
    }
};

// Event listener for toggling mode
modeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    updateIcon(); // Update icon when mode changes
});

// Initialize the correct icon and background on page load
updateIcon();

/*==================== Change images when light mode is activated ====================*/
const homeImg = document.querySelector('.home-img img');
const aboutImg = document.querySelector('.about-img img');

const updateImages = () => {
    if (body.classList.contains('light-mode')) {
        homeImg.src = 'imgs/home-v2.png';
        aboutImg.src = 'imgs/about-v2.png';
    } else {
        homeImg.src = 'imgs/home.png';
        aboutImg.src = 'imgs/about.png';
    }
};

// Update images when the mode is toggled
modeToggleBtn.addEventListener('click', updateImages);

// Initialize images based on mode on page load
updateImages();

/* Adjusting the hover effect to enhance the user experience */
const homeImage = document.querySelector('.home-img img');
const aboutImage = document.querySelector('.about-img img');

// Adjusted to provide a smoother transition when hovering
homeImage.addEventListener('mousemove', (event) => {
    const rect = homeImage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    homeImage.style.transform = `translate(${x * 20}px, ${y * 20}px) scale(1.05)`;
});

aboutImage.addEventListener('mousemove', (event) => {
    const rect = aboutImage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    aboutImage.style.transform = `translate(${x * 20}px, ${y * 20}px) scale(1.05)`;
});

homeImage.addEventListener('mouseleave', () => {
    homeImage.style.transform = 'scale(1)';
});

aboutImage.addEventListener('mouseleave', () => {
    aboutImage.style.transform = 'scale(1)';
});
