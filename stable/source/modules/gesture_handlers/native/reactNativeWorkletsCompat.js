// Module ID: 5083
// Function ID: 5084
// Name: reactNativeWorkletsCompat
// Dependencies: [5084, 2]

// Module 5083 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 5084 */;
import size from "module_2" /* 2 */;

const obj = {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    const runOnUIResult = ReanimatedRexport.runOnUI(fn);
    return runOnUIResult(...substr);
  }
};
const result = size.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default obj;
