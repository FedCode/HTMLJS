
const header = document.querySelector(".navbar-expand-lg");
const toggleClass = "is__fixed";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 80) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});










