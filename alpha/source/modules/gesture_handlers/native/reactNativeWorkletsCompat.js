// Module ID: 5013
// Function ID: 5014
// Name: reactNativeWorkletsCompat
// Dependencies: [5014, 2]

// Module 5013 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 5014 */;
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
