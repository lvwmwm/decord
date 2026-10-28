// Module ID: 5084
// Function ID: 5085
// Name: reactNativeWorkletsCompat
// Dependencies: [5085, 2]

// Module 5084 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 5085 */;
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
