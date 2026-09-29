// Module ID: 4523
// Function ID: 4524
// Name: reactNativeWorkletsCompat
// Dependencies: [4524, 2]

// Module 4523 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 4524 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return ReanimatedRexport.runOnUI(fn)(...substr);
  }
};
