// Change navbar background color on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY >= window.innerHeight) {
    navbar.style.backgroundColor = "var(--mainColor)";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});

//scroll animation
const sections = document.querySelectorAll(".scroll");

function checkScroll() {
  sections.forEach((section) => {
    const sectionPosition = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionPosition < windowHeight / 1.5) {
      section.classList.add("in-view");
    }
  });
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);
