document.addEventListener("DOMContentLoaded", function() {
  const startBtn = document.getElementById("startBtn");
  const stopBtn = document.getElementById("stopBtn");
  const timerDisplay = document.getElementById("timerDisplay");
  const stretchList = document.getElementById("stretchList");

  let autoStopTimeout;
  let countdownInterval;

  startBtn.addEventListener("click", function() {
    alert("Break & Stretch timer started!");

    // Set a timeout to automatically click the stop button after 10 minutes
    autoStopTimeout = setTimeout(function() {
      stopBtn.click();
    }, 10 * 60 * 1000); // 10 minutes in milliseconds

    // Start the countdown timer
    let remainingTime = 10 * 60; // 10 minutes in seconds
    updateTimerDisplay(remainingTime);
    countdownInterval = setInterval(function() {
      remainingTime--;
      updateTimerDisplay(remainingTime);
      if (remainingTime <= 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);
  });

  stopBtn.addEventListener("click", function() {
    alert("Break & Stretch timer stopped!");

    // Clear the timeout to avoid any unexpected automatic stops
    clearTimeout(autoStopTimeout);
    clearInterval(countdownInterval);
    updateTimerDisplay(10 * 60); // Reset timer display to 10:00
  });

  function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    timerDisplay.textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }

  // Function to add stretches dynamically
  function addStretch(name, description, videoUrl) {
    const stretchItem = document.createElement("li");
    stretchItem.innerHTML = `
      <strong>${name}</strong>: ${description}
      <br>
      <a href="${videoUrl}" target="_blank">Watch Video</a>
    `;
    stretchList.appendChild(stretchItem);
  }

  // Example stretches (replace with actual stretches)
  addStretch(
    "Lower Back Stretch",
    "Stand upright, feet shoulder-width apart. Slowly bend forward, reaching towards your toes. Hold for 20 seconds.",
    "https://www.youtube.com/watch?v=oi4Dq7uZfEg"
  );

  addStretch(
    "Cat-Cow Stretch",
    "Start on your hands and knees, with a neutral spine. Inhale and arch your back (Cow). Exhale and round your back (Cat). Repeat for 10 cycles.",
    "https://www.youtube.com/watch?v=vuyUwtHl694"
  );


  // You can add more stretches as needed
});
