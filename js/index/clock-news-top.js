const news = document.querySelector('aside');
let newsTop = news.offsetTop;
let clock = document.querySelector('#clock-container');

function scrollTopNews() {

  if (window.scrollY >= newsTop) {;
    news.style.position = "fixed";
    news.style.top = 0;
    news.style.right = 0;
    news.style.height = "40vh";
    news.style.paddingTop = "40vh";
    clock.style.top = "7vh";
    clock.style.width = "100%";
  } else {
    news.style.position = "";
    news.style.height = "";
    news.style.paddingTop = "";
    clock.style.top = "";
    clock.style.width = "";
  }
}

window.addEventListener('scroll', scrollTopNews);