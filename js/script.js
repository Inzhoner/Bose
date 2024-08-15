//+ burger menu
document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burger-menu");
  const closeMenu = document.getElementById("close-menu");
  const menu = document.getElementById("menu");
  const header = document.querySelector("header");

  burgerMenu.addEventListener("click", () => {
    menu.classList.add("active");
    header.style.display = "none";
  });

  closeMenu.addEventListener("click", () => {
    menu.classList.remove("active");
    header.style.display = "flex";
  });

  const menuLinks = document.querySelectorAll(".menu__link");
  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      const targetPosition = targetElement.offsetTop - header.offsetHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      menu.classList.remove("active");
      header.style.display = "flex";
    });
  });
});
