// Module ID: 13023
// Function ID: 99236
// Name: GetOption
// Dependencies: []

// Module 13023 (GetOption)
arg5.GetOption = function GetOption(arg0, arg1, arg2, arr) {
  if ("object" !== typeof arg0) {
    const _TypeError2 = TypeError;
    const typeError = new TypeError("Options must be an object");
    throw typeError;
  } else {
    arg1 = tmp25;
    if (undefined !== arg0[arg1]) {
      let str = "boolean";
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
        arg1 = BooleanResult;
        tmp2 = BooleanResult;
      }
      let tmp5 = tmp2;
      if ("string" === arg2) {
        str = arg1(arg6[0]).ToString(tmp2);
        arg1 = str;
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
