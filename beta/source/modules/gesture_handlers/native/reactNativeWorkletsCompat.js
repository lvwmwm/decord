// Module ID: 4565
// Function ID: 4566
// Name: reactNativeWorkletsCompat
// Dependencies: [4566, 2]

// Module 4565 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
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
