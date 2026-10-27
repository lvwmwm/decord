// Module ID: 5052
// Function ID: 5053
// Name: reactNativeWorkletsCompat
// Dependencies: [5053, 2]

// Module 5052 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 5053 */;
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
