// Module ID: 5094
// Function ID: 5095
// Name: reactNativeWorkletsCompat
// Dependencies: [5095, 2]

// Module 5094 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
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
