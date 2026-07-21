// Module ID: 7793
// Function ID: 62215
// Name: getFirstSkemaFieldError
// Dependencies: [1953825491, 683]
// Exports: getFirstSkemaError

// Module 7793 (getFirstSkemaFieldError)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function getFirstSkemaFieldError(errors, arg1) {
  let tmp5;
  let tmp6;
  if (null != errors[closure_1]) {
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
      let tmp7 = closure_1;
      if (tmp5 !== closure_1) {
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
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = "_errors";
const result = _isNativeReflectConstruct.fileFinishedImporting("modules/interactions/SkemaUtils.tsx");

export const getFirstSkemaError = function getFirstSkemaError(errors) {
  return getFirstSkemaFieldError(errors, undefined);
};
