const showToastBtn = document.getElementById("show-toast");
const toast = document.getElementById("toast");
const closeIcon = document.getElementById("close-icon");
const acceptBtn = document.getElementById("accept-btn");
const closeBtn = document.getElementById("close-btn");

let toastTimerId; // to store the timer ID set by the setTimeout() function.

// to show the TOAST
function showToast() {
  toast.classList.add("show"); // this makes the toast visible by applying the class show.
  toastTimerId = setTimeout(() => {
    hideToast();
  }, 3000);
}

// click event to show the TOAST
showToastBtn.addEventListener("click", showToast);

// to hide the TOAST
function hideToast() {
  toast.classList.remove("show"); // this makes the toast invisible by removing the class show.
  clearTimeout(toastTimerId);
}

// click events to hide the TOAST
closeIcon.addEventListener("click", hideToast);
closeBtn.addEventListener("click", hideToast);

acceptBtn.addEventListener("click", () => {
  alert("Notification Accepted!");
  hideToast();
});
