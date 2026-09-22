// Module ID: 4492
// Function ID: 4493
// Name: reactNativeWorkletsCompat
// Dependencies: [4493, 2]

// Module 4492 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 4493 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return ReanimatedRexport.runOnUI(fn)(...substr);
  }
};
