// Module ID: 4372
// Function ID: 4373
// Name: reactNativeWorkletsCompat
// Dependencies: [4373, 2]

// Module 4372 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 4373 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return ReanimatedRexport.runOnUI(fn)(...substr);
  }
};
