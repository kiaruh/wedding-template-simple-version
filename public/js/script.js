// countdown
// Function to calculate and update the countdown
function updateCountdown() {
  // Set the target date (December 9, 2023)
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
  document.querySelector('.text-wrapper-5').textContent = days;
  document.querySelector('.text-wrapper-6').textContent = hours;
  document.querySelector('.text-wrapper-7').textContent = minutes;
  document.querySelector('.text-wrapper-8').textContent = seconds;

  document.querySelector('.text-wrapper-3M').textContent = days;
  document.querySelector('.text-wrapper-4M').textContent = hours;
  document.querySelector('.text-wrapper-5M').textContent = minutes;
  document.querySelector('.text-wrapper-6M').textContent = seconds;
}

// Call the updateCountdown function initially
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);


//Nav bar
// Get DOM elements
const openNavButton = document.getElementById('icons-interactive-UI');
const closeNavButton = document.getElementById('element-outline-close-x');
const sideNav = document.getElementById('wireframe-footer');

// Function to open the side navigation
function openNav() {
    sideNav.classList.add('show');
}

// Function to close the side navigation
function closeNav() {
    sideNav.classList.remove('show');
}

// Event listeners
openNavButton.addEventListener('click', openNav);
closeNavButton.addEventListener('click', closeNav);

// Close the side navigation when clicking outside of it (optional)
document.addEventListener('click', (event) => {
    if (event.target !== sideNav && event.target !== openNavButton) {
        closeNav();
    }
});

// Prevent closing the side navigation when clicking inside it
sideNav.addEventListener('click', (event) => {
    event.stopPropagation();
});
