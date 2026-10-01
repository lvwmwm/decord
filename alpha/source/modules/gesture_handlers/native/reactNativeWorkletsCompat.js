// Module ID: 4594
// Function ID: 4595
// Name: reactNativeWorkletsCompat
// Dependencies: [4595, 2]

// Module 4594 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 4595 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return ReanimatedRexport.runOnUI(fn)(...substr);
  }
};
