// Module ID: 4114
// Function ID: 4115
// Dependencies: [4115, 2]

// Module 4114
const result = require("set").fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return require(4115).runOnUI(fn)(...substr);
  }
};
