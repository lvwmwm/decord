// Module ID: 7891
// Function ID: 62596
// Name: getFirstSkemaFieldError
// Dependencies: [57, 2]
// Exports: getFirstSkemaError

// Module 7891 (getFirstSkemaFieldError)
import _slicedToArray from "_slicedToArray";

function getFirstSkemaFieldError(errors, arg1) {
  let tmp5;
  let tmp6;
  if (null != errors[_errors]) {
    const _Array = Array;
    if (Array.isArray(tmp)) {
      return tmp[0];
    }
  }
  const entries = Object.entries(errors);
  let num = 0;
  if (0 < entries.length) {
    while (true) {
      let tmp3 = callback;
      let tmp4 = callback(entries[num], 2);
      [tmp5, tmp6] = tmp4;
      let tmp7 = _errors;
      if (tmp5 !== _errors) {
        if (null != tmp6) {
          if ("object" === typeof tmp6) {
            break;
          }
        }
      }
      num = num + 1;
    }
    return getFirstSkemaFieldError(tmp6, tmp5);
  }
  return null;
}
const _errors = "_errors";
const result = require("set").fileFinishedImporting("modules/interactions/SkemaUtils.tsx");

export const getFirstSkemaError = function getFirstSkemaError(errors) {
  return getFirstSkemaFieldError(errors, undefined);
};
