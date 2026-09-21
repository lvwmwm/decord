// Module ID: 5029
// Function ID: 5030
// Name: keys2
// Dependencies: [5030, 5031]

// Module 5029 (keys2)
import _mod5030 from "module_5030" /* 5030 */;
import _mod5031 from "module_5031" /* 5031 */;

if (keys) {
  let keys2 = function keys(arg0) {
    return keys(arg0);
  };
} else {
  keys2 = _mod5030;
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
        if (_mod5031(arg0)) {
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
