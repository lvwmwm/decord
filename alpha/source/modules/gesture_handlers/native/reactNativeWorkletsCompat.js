// Module ID: 4595
// Function ID: 4596
// Name: reactNativeWorkletsCompat
// Dependencies: [4596, 2]

// Module 4595 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 4596 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return ReanimatedRexport.runOnUI(fn)(...substr);
  }
};
