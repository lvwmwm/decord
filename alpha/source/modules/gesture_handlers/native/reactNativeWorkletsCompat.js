// Module ID: 4809
// Function ID: 4810
// Name: reactNativeWorkletsCompat
// Dependencies: [4810, 2]

// Module 4809 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
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
