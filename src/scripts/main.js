/*===================================================
CLOSE MENU WHEN ITEM IS CLICKED 
=====================================================*/
document.addEventListener('DOMContentLoaded', function() {
  // get list items
  let menuItemSelector = '.navbar-nav .nav-item';

  // handle item click
  let menuItems = document.querySelectorAll(menuItemSelector);
  menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      // check if menu is open
      let navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        // close menu when item is clicked
        navbarCollapse.classList.remove('show');
      }
    });
  });
});

/*===================================================
COUNTDOWN TIMER
=====================================================*/
// Set the date of the event (YYYY-MM-DD format)
const eventDate = new Date("2023-09-15");

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Store the initial values
let previousDays = -1;
let previousHours = -1;
let previousMinutes = -1;
let previousSeconds = -1;

function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = eventDate.getTime() - now;

  // Calculate the remaining days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the remaining time
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // Apply the CSS animation on value change
  if (days !== previousDays) {
    document.getElementById("days").classList.add("change");
    previousDays = days;
  }
  if (hours !== previousHours) {
    document.getElementById("hours").classList.add("change");
    previousHours = hours;
  }
  if (minutes !== previousMinutes) {
    document.getElementById("minutes").classList.add("change");
    previousMinutes = minutes;
  }
  if (seconds !== previousSeconds) {
    document.getElementById("seconds").classList.add("change");
    previousSeconds = seconds;
  }

  // Remove the CSS animation class after animation completes
  setTimeout(function () {
    document.getElementById("days").classList.remove("change");
    document.getElementById("hours").classList.remove("change");
    document.getElementById("minutes").classList.remove("change");
    document.getElementById("seconds").classList.remove("change");
  }, 500);
}

/*===================================================
BUTTON BACK TO TOP 
=====================================================*/
// show/hide button
window.onscroll = function() {
  let btnScrollToTop = document.getElementById("btnScrollToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnScrollToTop.style.display = "block";
  } else {
    btnScrollToTop.style.display = "none";
  }
};

// back to top function
function scrollToTop() {
  document.body.scrollTop = 0; // Safari browsers
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE e Opera
}

// event listener
document.getElementById("btnScrollToTop").addEventListener("click", scrollToTop);


