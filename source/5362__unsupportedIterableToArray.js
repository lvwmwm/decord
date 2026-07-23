// Module ID: 5362
// Function ID: 46003
// Name: _unsupportedIterableToArray
// Dependencies: [5363]

// Module 5362 (_unsupportedIterableToArray)

export default function _unsupportedIterableToArray(arg0, arg1) {
  if (arg0) {
    if ("string" === typeof arg0) {
      return require(5363) /* _arrayLikeToArray */(arg0, arg1);
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
            let arr = require(5363) /* _arrayLikeToArray */(arg0, arg1);
          } else {
            const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
          }
        }
        return arr;
      }
      const _Array = Array;
      arr = Array.from(arg0);
      const callResult = toString.call(arg0);
      tmp = "Object" === substr && arg0.constructor;
    }
  }
};
