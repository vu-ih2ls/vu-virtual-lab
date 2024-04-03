// Import settings from settings file.
import settings from './settings.js';
import {showModal} from './modal.js';
const baseUrl = settings.baseUrl;
const folder = settings.folder;

const pannellumViewer = {
  "default": {
    // Set default first scene.
    "firstScene": "example",
    // Set a fallback url for when pannellum/WebGL renderer is not supported.
    "fallback": "fallback.html",
    // Set the basepath to the folder from settings.js.
    "basePath": folder + "/",
    // Additional settings, see https://pannellum.org/documentation/reference/.
    "sceneFadeDuration": 1000,
    "compass": false
  },
  "scenes": {
    // First scene: lab 1
    "example": {
      "type": "equirectangular",
        // File name of equirectangular image.
        "panorama": "example.webp",
        /*
         * Uncomment the next line to print the coordinates of mouse clicks
         * to the browser's developer console, which makes it much easier
         * to figure out where to place hot spots. Always remove it when
         * finished, though.
         */
        // "hotSpotDebug": true,
        "hotSpots": [
        {
          "type": "info",
          // Use the hotSpotDebug (see above) to find right pitch and yaw.
          "pitch": -20,
          "yaw": 5,
          // Text shown on hover.
          "text": "Instrument 1",
          // Link to canvas page or url with more information.
          // "URL": baseUrl + "/pages/instrument",

          // OR: Use custom popup function to show popup.
          "clickHandlerFunc": showModal,
          // With arguments: array of html element name (in this case <p>) and the value (text or a url).
          "clickHandlerArgs": ["p", "This is a test!"],
          // OR:
          // "clickHandlerArgs": ["iframe", "https://www.youtube.com/embed/gw4A4CgwtyE?si=WmNxFpOCBCLPGQrn"],
        },
      ]
    },
    // Add more scenes here
  }
}

export default pannellumViewer;