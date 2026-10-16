// Module ID: 4908
// Function ID: 4909
// Name: reactNativeWorkletsCompat
// Dependencies: [4909, 2]

// Module 4908 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 4909 */;
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
