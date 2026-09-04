// Module ID: 4217
// Function ID: 4218
// Dependencies: [4218, 2]

// Module 4217
import set from "set" /* 2 */;
import _mod4218 from "module_4218" /* 4218 */;

const result = set.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return _mod4218.runOnUI(fn)(...substr);
  }
};
