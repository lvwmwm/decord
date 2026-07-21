// Module ID: 563
// Function ID: 6812
// Name: convertSkemaError
// Dependencies: []
// Exports: convertSkemaError

// Module 563 (convertSkemaError)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/http-utils/convertSkemaError.tsx");

export const convertSkemaError = function convertSkemaError(errors) {
  const obj = {};
  for (const key10009 in arg0) {
    let tmp2 = key10009;
    let tmp3 = arg0[key10009];
    if (null == tmp3) {
      continue;
    } else {
      if (key10009 === "_errors") {
        let arr = arg0[key10009];
        obj._misc = arr.map((message) => message.message);
      }
      let _Array = Array;
      if (Array.isArray(tmp3)) {
        continue;
      } else {
        let _errors = tmp3._errors;
        if (null != _errors) {
          let mapped = _errors.map((message) => message.message);
        } else {
          let _Object = Object;
          mapped = [Object.keys(tmp3)[0]];
        }
        obj[key10009] = mapped;
        let tmp = _errors;
        // continue
      }
      continue;
    }
    continue;
  }
  return obj;
};
