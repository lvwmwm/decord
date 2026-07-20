// Module ID: 564
// Function ID: 6816
// Name: stringifyErrors
// Dependencies: []

// Module 564 (stringifyErrors)
function stringifyErrors(arr) {
  const stringifyErrors = arr;
  let str = "";
  let str2 = "";
  if (null != arr) {
    if ("string" === typeof arr) {
      str2 = arr;
    } else {
      if (null == arr) {
        const _Array = Array;
        if (Array.isArray(arr)) {
          const reduced = arr.reduce((arr) => arr.concat(arr(arg1)), []);
          str = reduced.join(", ");
        } else if ("object" === tmp) {
          const _Object = Object;
          const keys = Object.keys(arr);
          const reduced1 = keys.reduce((arr) => {
            const tmp = arr(arr[arg1]);
            let combined = arr;
            if (tmp) {
              const _HermesInternal = HermesInternal;
              combined = arr.concat("" + tmp + " (" + arg1 + ")");
            }
            return combined;
          }, []);
          str = reduced1.join(", ");
        }
      }
      str = arr.message;
    }
  }
  return str2;
}
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/http-utils/stringifyErrors.tsx");

export { stringifyErrors };
