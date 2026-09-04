// Module ID: 6800
// Function ID: 6801
// Name: _unsupportedIterableToArray
// Dependencies: [6801]

// Module 6800 (_unsupportedIterableToArray)
import _arrayLikeToArray from "_arrayLikeToArray" /* 6801 */;


export default function _unsupportedIterableToArray(str) {
  if (str) {
    if (typeof str === "string") {
      return _arrayLikeToArray(str, arg1);
    } else {
      const toString = {}.toString;
      const call = toString.call;
      let arr = typeof call === "unknown" ? toString() : call(str);
      const substr = arr.slice(8, -1);
      let name = substr;
      if (tmp3) {
        name = str.constructor.name;
      }
      if ("Map" !== name) {
        if ("Set" !== name) {
          if ("Arguments" === name) {
            arr = _arrayLikeToArray(str, arg1);
          } else {
            const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
          }
        }
        return arr;
      }
      const _Array = Array;
      arr = Array.from(str);
      tmp3 = "Object" === substr && str.constructor;
    }
  }
};
