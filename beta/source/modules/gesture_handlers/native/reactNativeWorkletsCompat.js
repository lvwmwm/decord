// Module ID: 4491
// Function ID: 4492
// Name: reactNativeWorkletsCompat
// Dependencies: [4492, 2]

// Module 4491 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 4492 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return ReanimatedRexport.runOnUI(fn)(...substr);
  }
};
