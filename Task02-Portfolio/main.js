// ==================       Nav Show Y Hidden       ==========================================
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

// Show
toggleMenu.addEventListener("click", ()=>{
    navMenu.classList.toggle("show");
})

// Hidden
closeMenu.addEventListener("click", ()=>{
    navMenu.classList.remove("show");
})

// ===================      Remove Menu         ==========================================
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener("click", linkAction));

// ===================      Scroll Sections Active Link        ==========================================
const sections = document.querySelectorAll('section[id]');
window.addEventListener("scroll", scrollActive);

function scrollActive(){
    const scrolly = window.pageYOffset;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;

        let sectionID = current.getAttribute('id');

        if(scrolly > sectionTop && scrolly <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav__menu a[href*=' + sectionID + ']').classList.add('active')
        }
        else
        {
            document.querySelector('.nav__menu a[href*=' + sectionID + ']').classList.remove('active')
        }


    })
}
