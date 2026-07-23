// Module ID: 13146
// Function ID: 101430
// Name: __exportStarResult6
// Dependencies: [13137]

// Module 13146 (__exportStarResult6)
const require = arg1;
const dependencyMap = arg6;
arg5.GetStringOrBooleanOption = function GetStringOrBooleanOption(result1, useGrouping, arg2, always, arg4, arg5) {
  let items = arg2;
  if (undefined === result1[useGrouping]) {
    return arg5;
  } else if (true === tmp) {
    return always;
  } else {
    const _Boolean = Boolean;
    if (false === Boolean(tmp)) {
      return arg4;
    } else {
      let str = require(13137) /* __exportStarResult32 */.ToString(tmp);
      if ("true" !== str) {
        str = "false";
        if ("false" !== str) {
          if (!items) {
            items = [];
          }
          if (-1 === items.indexOf(str)) {
            const _RangeError = RangeError;
            const concat = "Invalid value ".concat;
            const rangeError = new RangeError("Invalid value ".concat(str));
            throw rangeError;
          } else {
            return str;
          }
        }
      }
      return arg5;
    }
  }
};
