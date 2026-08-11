// Module ID: 4041
// Function ID: 4042
// Dependencies: [4042, 2]

// Module 4041
const result = require("set").fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return require(4042).runOnUI(fn)(...substr);
  }
};
