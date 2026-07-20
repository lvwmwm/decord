// Module ID: 13016
// Function ID: 99196
// Name: GetStringOrBooleanOption
// Dependencies: []

// Module 13016 (GetStringOrBooleanOption)
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
      let str = useGrouping(arg6[0]).ToString(tmp);
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
