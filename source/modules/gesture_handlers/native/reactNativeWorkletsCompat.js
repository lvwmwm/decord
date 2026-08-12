// Module ID: 4082
// Function ID: 4083
// Dependencies: [4083, 2]

// Module 4082
const result = require("set").fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return require(4083).runOnUI(fn)(...substr);
  }
};
