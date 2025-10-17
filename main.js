const updateTime = () => {
  const timeElement = document.getElementById("timeDisplay");
  const now = new Date();

  // Format: Friday, Oct 17, 2025 - 10:42:08 AM
  const formatted = now.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  timeElement.textContent = formatted;
};

updateTime();
setInterval(updateTime, 1000);
