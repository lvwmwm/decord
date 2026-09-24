// Module ID: 7128
// Function ID: 7129
// Dependencies: [7129]

// Module 7128
import _mod7129 from "module_7129" /* 7129 */;


export default function _unsupportedIterableToArray(str, arg1) {
  if (str) {
    if (typeof str === "string") {
      return _mod7129(str, arg1);
    } else {
      const toString = {}.toString;
      const call = toString.call;
      const substr = typeof call === "unknown" ? toString() : call(str).slice(8, -1);
      let name = substr;
      if (tmp3) {
        name = str.constructor.name;
      }
      if ("Map" !== name) {
        if ("Set" !== name) {
          if ("Arguments" === name) {
            let arr2 = _mod7129(str, arg1);
          } else {
            const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
          }
        }
        return arr2;
      }
      const _Array = Array;
      arr2 = Array.from(str);
      const arr = typeof call === "unknown" ? toString() : call(str);
      tmp3 = "Object" === substr && str.constructor;
    }
  }
};
