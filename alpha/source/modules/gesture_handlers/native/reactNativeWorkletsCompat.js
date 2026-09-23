// Module ID: 4558
// Function ID: 4559
// Name: reactNativeWorkletsCompat
// Dependencies: [4559, 2]

// Module 4558 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 4559 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return ReanimatedRexport.runOnUI(fn)(...substr);
  }
};
