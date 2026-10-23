// Module ID: 5049
// Function ID: 5050
// Name: reactNativeWorkletsCompat
// Dependencies: [5050, 2]

// Module 5049 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 5050 */;
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
