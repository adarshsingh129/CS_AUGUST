//js file is used to make navbar responsive and animate the hamburg icon

const hamburg=document.getElementById("hamburg-icon");
const navlinks=document.getElementById("nav-links");

let rows=document.getElementsByClassName("row");

hamburg.addEventListener('click',()=>{
    navlinks.classList.toggle('active');
    rows[0].classList.toggle('active');
    rows[1].classList.toggle('active');
    rows[2].classList.toggle('active');
});