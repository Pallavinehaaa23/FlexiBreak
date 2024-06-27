chrome.alarms.create("breakReminder", {
    delayInMinutes: 60,  // 1 hour interval
    periodInMinutes: 60  // repeat every 1 hour
  });
  
  chrome.alarms.onAlarm.addListener(alarm => {
    if (alarm.name === "breakReminder") {
      chrome.notifications.create({
        type: "basic",
        iconUrl: "images/icon48.png",
        title: "Take a Break!",
        message: "It's time to take a 10-minute break."
      });
    }
  });
  