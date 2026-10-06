// Module ID: 6352
// Function ID: 6353
// Name: _unsupportedIterableToArray
// Dependencies: [6353]

// Module 6352 (_unsupportedIterableToArray)
import _arrayLikeToArray from "_arrayLikeToArray" /* 6353 */;


export default function _unsupportedIterableToArray(str, arg1) {
  const tmp = str;
  if (tmp) {
    if (typeof str === "string") {
      return _arrayLikeToArray(str, arg1);
    } else {
      const toString = {}.toString;
      const callResult = toString.call(str);
      const substr = callResult.slice(8, -1);
      let name = substr;
      const tmp4 = "Object" === substr && str.constructor;
      if (tmp4) {
        name = str.constructor.name;
      }
      if ("Map" !== name) {
        let arr;
        if ("Set" !== name) {
          if ("Arguments" === name) {
            arr = _arrayLikeToArray(str, arg1);
          }
        }
        return arr;
      }
      const _Array = Array;
      arr = Array.from(str);
    }
  }
};
