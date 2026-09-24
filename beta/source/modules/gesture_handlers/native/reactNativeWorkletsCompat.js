// Module ID: 4528
// Function ID: 4529
// Name: reactNativeWorkletsCompat
// Dependencies: [4529, 2]

// Module 4528 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 4529 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return ReanimatedRexport.runOnUI(fn)(...substr);
  }
};
