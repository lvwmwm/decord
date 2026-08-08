// Module ID: 4035
// Function ID: 4036
// Dependencies: [4036, 2]

// Module 4035
const result = require("set").fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return require(4036).runOnUI(fn)(...substr);
  }
};
