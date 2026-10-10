// Module ID: 4849
// Function ID: 4850
// Name: reactNativeWorkletsCompat
// Dependencies: [4850, 2]

// Module 4849 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
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
