const btnCloseNotification = document.querySelector(".btn-notification-panel");
const btnCloseNewsLetter = document.querySelector(".btn-close");
const notificationPanel = document.querySelector(".section-notification-panel");
const newsLetterPanel = document.querySelector(".section-newsletter-panel");

window.onscroll = function (e) {
  const screenHeight = document.body.offsetHeight - window.innerHeight;
  const screenHeight33 = screenHeight / 3;

  if (window.scrollY >= screenHeight33) {
    newsLetterPanel.classList.add("reveal");
  }
};

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
