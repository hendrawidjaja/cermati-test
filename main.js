window.onscroll = function (e) {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // you're at the bottom of the page
    console.log(e);
  }
};

const btnCloseNotification = document.querySelector(".btn-notification-panel");
const btnCloseNewsLetter = document.querySelector(".btn-close");
const notificationPanel = document.querySelector(".section-notification-panel");
const newsLetterPanel = document.querySelector(".section-newsletter-panel");

function removeNode(selector, classList = "hide", timeout = 6000) {
  selector.classList.add(classList);

  setTimeout(function () {
    selector.parentNode.removeChild(selector);
  }, timeout);
}

/* click event */
btnCloseNotification.onclick = function () {
  removeNode(notificationPanel);
};

btnCloseNewsLetter.onclick = function () {
  removeNode(newsLetterPanel);
};
