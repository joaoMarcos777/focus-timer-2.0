import state from "./state.js";
import { bgSound } from "./sounds.js";

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
