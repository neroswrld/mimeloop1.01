
  const navItems = document.querySelectorAll("footer nav ul li a");


navItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    navItems.forEach((item) => {
      item.classList.remove("active");
    });
    event.target.classList.add("active");
  });
});
