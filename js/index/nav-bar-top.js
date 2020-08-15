const navBar = document.querySelector('nav');
var main = document.querySelector('main');
let navTop = navBar.offsetTop;

function scrollTopNav() {

  if (window.scrollY >= navTop) {;
    navBar.style.position = "fixed";
    navBar.style.top = 0;
    navBar.style.zIndex = "1";
    main.style.paddingTop = "6vh";
  } else {
    navBar.style.position = "relative";
    navBar.style.top = "";
    main.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', scrollTopNav);