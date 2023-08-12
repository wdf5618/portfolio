// Select DOM Items
const navBtn = document.querySelector('.navbar-btn');
const navbar = document.querySelector('.navbar');
const navbarNav = document.querySelector('.navbar-nav');
const navItems = document.querySelectorAll('.nav-item');
const navBranding = document.querySelector('.navbar-branding');

// Set Initial State Of Navbar
let showNavbar = false;

navBtn.addEventListener('click', toggleNavbar);

function toggleNavbar(){
    if(!showNavbar){
        navBtn.classList.add('close');
        navbar.classList.add('show');
        navbarNav.classList.add('show');
        navBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
    
        // Set Navbar State
        showNavbar = true;
    }else{
        navBtn.classList.remove('close');
        navbar.classList.remove('show');
        navbarNav.classList.remove('show');
        navBranding.classList.remove
        ('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Set Navbar State 
        showNavbar = false;
    }

}