window.onscroll = function (e) {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // you're at the bottom of the page
    console.log(e);
  }
};

const btnCloseNewsLetter = document.querySelector(".btn-close");
const newsLetterPanel = document.querySelector(".section-newsletter-panel");

/* click event */
btnCloseNewsLetter.onclick = function () {
  newsLetterPanel.classList.add("hide");

  setTimeout(function () {
    newsLetterPanel.parentNode.removeChild(newsLetterPanel);
  }, 2000);
};
