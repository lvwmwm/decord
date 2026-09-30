// Module ID: 5320
// Function ID: 5321
// Name: keys2
// Dependencies: [5321, 5322]

// Module 5320 (keys2)
import _mod5321 from "module_5321" /* 5321 */;
import _mod5322 from "module_5322" /* 5322 */;

if (keys) {
  let keys2 = function keys(arg0) {
    return keys(arg0);
  };
} else {
  keys2 = _mod5321;
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
        if (_mod5322(arg0)) {
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
