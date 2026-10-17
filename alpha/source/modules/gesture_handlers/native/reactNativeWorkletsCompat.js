// Module ID: 4944
// Function ID: 4945
// Name: reactNativeWorkletsCompat
// Dependencies: [4945, 2]

// Module 4944 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 4945 */;
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
