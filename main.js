const toggleIcon = document.getElementById("toggle-icon");
const menu = document.getElementById("burger-menu");

toggleIcon.addEventListener("click", (e) => {
  if (toggleIcon.classList.contains("bx-menu")) {
    menu.classList.add("opened");
    toggleIcon.classList.remove("bx-menu");
    toggleIcon.classList.add("bx-x");
  } else {
    menu.classList.remove("opened");
    toggleIcon.classList.add("bx-menu");
    toggleIcon.classList.remove("bx-x");
  }
});

const openSearch = document.getElementById("search-icon");
const closeSearch = document.getElementById("close-search");
const searchNav = document.getElementById("search-nav");

openSearch.addEventListener("click", (e) => {
  searchNav.classList.add("opened");
});
closeSearch.addEventListener("click", (e) => {
  searchNav.classList.remove("opened");
});

const logo = document.getElementById("logo-link");
logo.addEventListener("click", (e) => {
  window.location.href = "https://www.goabstract.com/";
});

const input = document.querySelectorAll("input");
input.forEach((inp) => {
  inp.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      window.location.href = `https://help.abstract.com/hc/en-us/search?utf8=%E2%9C%93&query=${inp.value.replace(
        /\s/g,
        "+"
      )}`;
    }
  });
});
