// Module ID: 15461
// Function ID: 15462
// Name: GetStringOrBooleanOption
// Dependencies: [15452]
// Exports: GetStringOrBooleanOption

// Module 15461 (GetStringOrBooleanOption)
import _mod15452 from "module_15452" /* 15452 */;


export const GetStringOrBooleanOption = function GetStringOrBooleanOption(result1, useGrouping, arg2, always, arg4, min2) {
  if (undefined === result1[useGrouping]) {
    return min2;
  } else if (true === result1[useGrouping]) {
    return always;
  } else {
    const _Boolean = Boolean;
    if (false === Boolean(result1[useGrouping])) {
      return arg4;
    } else {
      const str1 = _mod15452.ToString(result1[useGrouping]);
      if ("true" !== str1) {
        if ("false" !== str1) {
          const arr = arg2 || [];
          if (-1 === arr.indexOf(str1)) {
            const _RangeError = RangeError;
            const concat = "Invalid value ".concat;
            const self = this;
            const self2 = this;
            const rangeError = new RangeError("Invalid value ".concat(str1));
            throw rangeError;
          } else {
            return str1;
          }
        }
      }
      return min2;
    }
  }
};
