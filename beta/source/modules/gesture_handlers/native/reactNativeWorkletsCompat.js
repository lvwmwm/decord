// Module ID: 4496
// Function ID: 4497
// Name: reactNativeWorkletsCompat
// Dependencies: [4497, 2]

// Module 4496 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 4497 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return ReanimatedRexport.runOnUI(fn)(...substr);
  }
};
