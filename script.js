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
