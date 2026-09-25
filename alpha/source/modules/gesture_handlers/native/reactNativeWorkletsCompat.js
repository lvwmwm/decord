// Module ID: 4562
// Function ID: 4563
// Name: reactNativeWorkletsCompat
// Dependencies: [4563, 2]

// Module 4562 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 4563 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return ReanimatedRexport.runOnUI(fn)(...substr);
  }
};
