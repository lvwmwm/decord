// Module ID: 5051
// Function ID: 5052
// Name: reactNativeWorkletsCompat
// Dependencies: [5052, 2]

// Module 5051 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 5052 */;
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
