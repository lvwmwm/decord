// Module ID: 5814
// Function ID: 5815
// Name: _unsupportedIterableToArray
// Dependencies: [5815]

// Module 5814 (_unsupportedIterableToArray)
import _arrayLikeToArray from "_arrayLikeToArray" /* 5815 */;


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
