// Module ID: 5089
// Function ID: 5090
// Name: reactNativeWorkletsCompat
// Dependencies: [5090, 2]

// Module 5089 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
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
