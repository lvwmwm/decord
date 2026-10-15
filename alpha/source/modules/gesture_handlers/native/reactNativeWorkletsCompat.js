// Module ID: 4905
// Function ID: 4906
// Name: reactNativeWorkletsCompat
// Dependencies: [4906, 2]

// Module 4905 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 4906 */;
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
