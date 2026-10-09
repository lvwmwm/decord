// Module ID: 4810
// Function ID: 4811
// Name: reactNativeWorkletsCompat
// Dependencies: [4811, 2]

// Module 4810 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
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
