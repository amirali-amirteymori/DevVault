const triggerButton = document.querySelector(".trigger-btn");
const alertPopup = document.getElementById("alert-popup");
const closeButton = document.getElementById("close-alert");

let timeoutId; // for save the time.

function showAlert() {
  alertPopup.classList.add("show");

  timeoutId = setTimeout(() => {
    alertPopup.classList.remove("show");
  }, 3000);
}

triggerButton.addEventListener("click", showAlert);

closeButton.addEventListener("click", () => {
  alertPopup.classList.remove("show");
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
});
