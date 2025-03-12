/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/EventReporter.js
class EventReporter {
  constructor(containerId, serverUrl = "http://localhost:3000/events") {
    this.eventsContainer = document.getElementById(containerId);
    this.serverUrl = serverUrl;
    this.init();
  }
  init() {
    this.setupEventSource();
  }
  setupEventSource() {
    const eventSource = new EventSource(this.serverUrl);
    eventSource.onmessage = event => {
      const data = JSON.parse(event.data);
      this.addEvent(data);
    };
    eventSource.onerror = () => {
      console.error("Ошибка соединения с сервером.");
    };
  }
  addEvent(event) {
    const eventElement = document.createElement("div");
    eventElement.className = "event";
    const icon = this.getEventIcon(event.type);
    eventElement.innerHTML = `
      <div class="event-icon">${icon}</div>
      <div class="event-content">
        <div class="event-time">${event.timestamp}</div>
        <div class="event-text">${event.text}</div>
      </div>
    `;
    this.eventsContainer.appendChild(eventElement);
    this.eventsContainer.scrollTop = this.eventsContainer.scrollHeight;
  }
  getEventIcon(eventType) {
    switch (eventType) {
      case "action":
        return "⚽";
      case "freekick":
        return "⚠️";
      case "goal":
        return "🥅";
      case "start":
        return "🟢";
      case "end":
        return "🔴";
      default:
        return "";
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener("DOMContentLoaded", () => {
  // const serverUrl = "http://localhost:3000/events";
  const serverUrl = "https://ahj-homeworks-8-3.onrender.com/events";
  new EventReporter("events", serverUrl);
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;