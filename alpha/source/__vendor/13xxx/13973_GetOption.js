// Module ID: 13973
// Function ID: 13974
// Name: GetOption
// Dependencies: [13966]
// Exports: GetOption

// Module 13973 (GetOption)
import _mod13966 from "module_13966" /* 13966 */;


export const GetOption = function GetOption(obj, arg1, arg2, join, arg4) {
  if (typeof obj !== "object") {
    const _TypeError2 = TypeError;
    const self5 = this;
    const self6 = this;
    const typeError = new TypeError("Options must be an object");
    throw typeError;
  } else {
    let str1 = tmp21;
    if (undefined !== obj[arg1]) {
      if ("boolean" !== arg2) {
        if ("string" !== arg2) {
          const _TypeError = TypeError;
          const self3 = this;
          const self4 = this;
          const typeError1 = new TypeError("invalid type");
          throw typeError1;
        }
      }
      let tmp3 = tmp21;
      if ("boolean" === arg2) {
        const _Boolean = Boolean;
        const BooleanResult = Boolean(obj[arg1]);
        str1 = BooleanResult;
        tmp3 = BooleanResult;
      }
      let tmp6 = tmp3;
      if ("string" === arg2) {
        str1 = _mod13966.ToString(tmp3);
        tmp6 = str1;
      }
      if (undefined !== join) {
        if (!join.filter((item) => item == str1).length) {
          const _RangeError = RangeError;
          const concat = "".concat;
          const combined = "".concat(tmp6, " is not within ");
          const self = this;
          const self2 = this;
          const rangeError = new RangeError(combined.concat(join.join(", ")));
          throw rangeError;
        }
      }
      return tmp6;
    } else {
      return arg4;
    }
  }
};
