// Module ID: 5037
// Function ID: 5038
// Name: reactNativeWorkletsCompat
// Dependencies: [5038, 2]

// Module 5037 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 5038 */;
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
