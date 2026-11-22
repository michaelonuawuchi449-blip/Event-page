// ======================
// COUNTDOWN TIMER
// ======================

// Set the date of the event here (Year, Month-1, Day, Hour, Minute)
// Example: 20 December 2026 at 2:00 PM
const eventDate = new Date("2026-12-20T14:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  // If the event has passed
  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "<p style='font-size:1.2rem;font-weight:600;'>The event has started!</p>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

// Update every second
updateCountdown();
setInterval(updateCountdown, 1000);

// ======================
// RSVP FORM
// ======================
const rsvpForm = document.getElementById("rsvpForm");
if (rsvpForm) {
  rsvpForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your RSVP! We have received your response.\n\n(You can later connect this form to WhatsApp or email)");
    rsvpForm.reset();
  });
}

// Current year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
