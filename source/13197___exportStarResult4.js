// Module ID: 13197
// Function ID: 101752
// Name: __exportStarResult4
// Dependencies: [13190]

// Module 13197 (__exportStarResult4)
const require = arg1;
const dependencyMap = arg6;
arg5.GetOption = function GetOption(arg0, arg1, arg2, arr) {
  if ("object" !== typeof arg0) {
    const _TypeError2 = TypeError;
    const typeError = new TypeError("Options must be an object");
    throw typeError;
  } else {
    let str = tmp25;
    if (undefined !== arg0[arg1]) {
      str = "boolean";
      if ("boolean" !== arg2) {
        if ("string" !== arg2) {
          const _TypeError = TypeError;
          const typeError1 = new TypeError("invalid type");
          throw typeError1;
        }
      }
      let tmp2 = tmp25;
      if ("boolean" === arg2) {
        const _Boolean = Boolean;
        const BooleanResult = Boolean(tmp25);
        str = BooleanResult;
        tmp2 = BooleanResult;
      }
      let tmp5 = tmp2;
      if ("string" === arg2) {
        str = str(13190).ToString(tmp2);
        tmp5 = str;
      }
      if (undefined !== arr) {
        if (!arr.filter((arg0) => arg0 == str).length) {
          const _RangeError = RangeError;
          const concat = "".concat;
          const combined = "".concat(tmp5, " is not within ");
          const rangeError = new RangeError(combined.concat(arr.join(", ")));
          throw rangeError;
        }
      }
      return tmp5;
    } else {
      return arg4;
    }
  }
};
