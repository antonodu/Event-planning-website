const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navigation-links");

hamburger.addEventListener("click", () => {
    console.log("clicked")
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});