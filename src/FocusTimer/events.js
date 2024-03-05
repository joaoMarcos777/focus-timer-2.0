import { controls, soundsControls } from "./elements.js";
import * as actions from "./actions.js";

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    if (typeof actions[action]() != "function") {
      return;
    }

    actions[action]();
  });
}

export function registerSounds() {
  soundsControls.addEventListener("click", (event) => {
    actions.toggleSound(event.target.id);
  });
}
