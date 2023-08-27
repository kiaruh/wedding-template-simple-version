// Function to check if the viewport is a mobile device
function isMobileViewport() {
  return window.innerWidth <= 780; // You can adjust this value as needed
}

// Function to toggle element visibility
function toggleElementVisibility(element, isVisible) {
  if (isVisible) {
    element.style.display = "block"; // Show the element
  } else {
    element.style.display = "none"; // Hide the element
  }
}

// Function to update element visibility based on viewport
function updateElementVisibility() {
  const contentElement = document.querySelector(".content");
  const mobileElement = document.querySelector(".mobileM");

  if (isMobileViewport()) {
    toggleElementVisibility(contentElement, false); // Hide .content
    toggleElementVisibility(mobileElement, true); // Show .mobile
  } else {
    toggleElementVisibility(contentElement, true); // Show .content
    toggleElementVisibility(mobileElement, false); // Hide .mobile
  }
}

// Call the function when the page loads and when the viewport is resized
window.onload = function () {
  updateElementVisibility();
};

window.addEventListener("resize", function () {
  updateElementVisibility();
});

// 
// Function to calculate and update the countdown
function updateCountdown() {
  // Set the target date (December 9, 2030)
  const targetDate = new Date('2023-12-09T00:00:00');

  // Get the current date and time
  const currentDate = new Date();

  // Calculate the time remaining in milliseconds
  const timeRemaining = targetDate - currentDate;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Update the HTML elements with the calculated values
  document.querySelector('._172').textContent = days;
  document.querySelector('._12').textContent = hours;
  document.querySelector('._9').textContent = minutes;
  document.querySelector('._18').textContent = seconds;
}

// Call the updateCountdown function initially
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);

