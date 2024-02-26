// Import settings from settings file.
import settings from './settings.js';
const baseUrl = settings.baseUrl;
const folder = settings.folder;

const pannellumViewer = {
  "default": {
    // Set default first scene.
    "firstScene": "lab1",
      "sceneFadeDuration": 1000,
      "fallback": "fallback.html"
  },
  "scenes": {
    // First scene: lab 1
    "lab1": {
      "type": "equirectangular",
        /*
         * Change the panorama value to the file of the equirectangular image.
         */
        "panorama": folder+"/lab.jpg",
        "autoLoad": true,
        /*
         * Uncomment the next line to print the coordinates of mouse clicks
         * to the browser's developer console, which makes it much easier
         * to figure out where to place hot spots. Always remove it when
         * finished, though.
         */
        // "hotSpotDebug": true,

        "hotSpots": [
        {
          "pitch": -6.5,
          "yaw": -50,
          "type": "info",
          "text": "Instrument 1",
          "URL": baseUrl+"/pages/hplc"
        },
        {
          "pitch": -5,
          "yaw": 160,
          "type": "scene",
          "text": "Naar buiten",
          "sceneId": "lab2"
        },
      ]
    },
    // Second scene: lab 2
    "lab2": {
      "type": "equirectangular",
        "panorama": folder+"/lab.jpg",
        "autoLoad": true,
        // "hotSpotDebug": true,
        "hotSpots": [
        {
          "pitch": -1.5,
          "yaw": 60,
          "type": "scene",
          "text": "Naar het lab",
          "sceneId": "lab1"
        },
      ]
    },
  }
}

export default pannellumViewer;