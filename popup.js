document.addEventListener("DOMContentLoaded", function() {
  const startBtn = document.getElementById("startBtn");
  const stopBtn = document.getElementById("stopBtn");
  const stretchList = document.getElementById("stretchList");

  startBtn.addEventListener("click", function() {
    chrome.alarms.create("breakReminder", {
      delayInMinutes: 60,
      periodInMinutes: 60
    });
    alert("Break & Stretch reminder started!");
  });

  stopBtn.addEventListener("click", function() {
    chrome.alarms.clear("breakReminder");
    alert("Break & Stretch reminder stopped!");
  });

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
