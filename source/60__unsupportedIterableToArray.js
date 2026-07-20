// Module ID: 60
// Function ID: 1407
// Name: _unsupportedIterableToArray
// Dependencies: []

// Module 60 (_unsupportedIterableToArray)

export default function _unsupportedIterableToArray(arg0, arg1) {
  if (arg0) {
    if ("string" === typeof arg0) {
      return require(dependencyMap[0])(arg0, arg1);
    } else {
      const toString = {}.toString;
      const substr = toString.call(arg0).slice(8, -1);
      let name = substr;
      if (tmp) {
        name = arg0.constructor.name;
      }
      if ("Map" !== name) {
        if ("Set" !== name) {
          if ("Arguments" === name) {
            let arr = require(dependencyMap[0])(arg0, arg1);
          } else {
            const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
          }
        }
        return arr;
      }
      const _Array = Array;
      arr = Array.from(arg0);
      const callResult = toString.call(arg0);
      const tmp = "Object" === substr && arg0.constructor;
    }
  }
};
