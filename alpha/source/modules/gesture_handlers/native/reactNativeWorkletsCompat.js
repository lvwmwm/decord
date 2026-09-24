// Module ID: 4560
// Function ID: 4561
// Name: reactNativeWorkletsCompat
// Dependencies: [4561, 2]

// Module 4560 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 4561 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return ReanimatedRexport.runOnUI(fn)(...substr);
  }
};
