// Module ID: 4910
// Function ID: 4911
// Name: keys2
// Dependencies: [4911, 4912]

// Module 4910 (keys2)
import _mod4911 from "module_4911" /* 4911 */;
import _mod4912 from "module_4912" /* 4912 */;

if (keys) {
  let keys2 = function keys(arg0) {
    return keys(arg0);
  };
} else {
  keys2 = _mod4911;
}
keys = Object.keys;
keys2.shim = function shimObjectKeys() {
  if (Object.keys) {
    if (!(() => {
      keys = Object.keys(arguments);
      let tmp = keys;
      if (keys) {
        tmp = keys.length === arguments.length;
      }
      return tmp;
    })(1, 2)) {
      const _Object2 = Object;
      Object.keys = function keys(arg0) {
        if (_mod4912(arg0)) {
          const call = slice.call;
          tmp(typeof call === "unknown" ? slice() : call(arg0));
        } else {
          return tmp(arg0);
        }
      };
    }
  } else {
    const _Object = Object;
    Object.keys = keys2;
  }
  return Object.keys || keys2;
};

export default keys2;
