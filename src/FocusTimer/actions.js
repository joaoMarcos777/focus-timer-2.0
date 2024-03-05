import state from "./state.js";
import { bgSound } from "./sounds.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();
}

export function reset() {
  state.isRunning = false;
  state.isRunning = document.documentElement.classList.remove("running");

  timer.updateDisplay();
}

export function set() {
  el.minutes.setAttribute("contentEditable", true);
  el.minutes.focus();
}

export function increaseTime() {
  let totalMinutes = Number(el.minutes.textContent);
  totalMinutes += 5;
  totalMinutes > 60 ? (totalMinutes = 60) : totalMinutes;

  state.minutes = totalMinutes;
  timer.updateDisplay();
}

export function decreaseTime() {
  let totalMinutes = Number(el.minutes.textContent);
  totalMinutes -= 5;
  totalMinutes < 0 ? (totalMinutes = 0) : totalMinutes;

  state.minutes = totalMinutes;
  timer.updateDisplay();
}

export function toggleSound(soundId) {
  state.isMuted = document
    .getElementById(`${soundId}`)
    .classList.toggle("selected");

  if (state.isMuted) {
    bgSound.play(bgSound[soundId]);
    return;
  }

  bgSound.pause(bgSound[soundId]);
}
