// Module ID: 5124
// Function ID: 5125
// Name: keys2
// Dependencies: [5125, 5126]

// Module 5124 (keys2)
import isArguments from "isArguments" /* 5125 */;
import isArguments2 from "isArguments" /* 5126 */;

let keys2;
if (keys) {
  keys2 = function keys(arg0) {
    return keys(arg0);
  };
} else {
  keys2 = isArguments;
}
keys2 = Object.keys;
keys2.shim = function shimObjectKeys() {
  if (Object.keys) {
    if (!(function() {
      keys = Object.keys(arguments);
      return keys && keys.length === arguments.length;
    })(1, 2)) {
      const _Object2 = Object;
      Object.keys = function keys(arg0) {
        let tmpResult;
        if (isArguments2(arg0)) {
          tmpResult = tmp(slice.call(arg0));
        } else {
          tmpResult = tmp(arg0);
        }
        return tmpResult;
      };
    }
  } else {
    const _Object = Object;
    const tmp = keys2;
    Object.keys = keys2;
  }
  return Object.keys || keys2;
};

export default keys2;
