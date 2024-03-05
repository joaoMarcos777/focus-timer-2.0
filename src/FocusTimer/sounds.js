export const bgSound = {
  forestSound: new Audio("./assets/forest.wav"),
  rainSound: new Audio("./assets/rain.wav"),
  coffeeShopSound: new Audio("./assets/coffee-shop.wav"),
  fireplaceSound: new Audio("./assets/fireplace.wav"),

  play(sound) {
    sound.loop = true;
    sound.volume = 0.5;
    sound.play();
  },

  pause(sound) {
    sound.pause();
  },
};
