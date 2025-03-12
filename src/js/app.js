import EventReporter from "./EventReporter.js";

document.addEventListener("DOMContentLoaded", () => {
  // const serverUrl = "http://localhost:3000/events";
  const serverUrl = "https://ahj-homeworks-8-3.onrender.com/events";
  new EventReporter("events", serverUrl);
});
