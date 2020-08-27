const news = document.querySelector('aside');
let newsTop = news.offsetTop;
let clock = document.querySelector('#clock-container');

function scrollTopNews() {

  if (window.scrollY >= newsTop) {;
    news.style.position = "fixed";
    news.style.top = 0;
    news.style.right = 0;
    news.style.height = "60vh";
    news.style.paddingTop = "40vh";
    clock.style.position = "fixed";
    clock.style.top = "7vh";
    clock.style.right = 0;
    clock.style.width = "20%";
  } else {
    news.style.position = "";
    news.style.top = "";
    news.style.right = "";
    news.style.height = "";
    news.style.paddingTop = "";
    clock.style.position = "";
    clock.style.top = "";
    clock.style.width = "";
  }
}

window.addEventListener('scroll', scrollTopNews);