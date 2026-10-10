// Module ID: 14710
// Function ID: 14711
// Name: validateScope
// Dependencies: [5639, 2]
// Exports: default

// Module 14710 (validateScope)
import Constants from "Constants" /* 5639 */;
import size from "module_2" /* 2 */;

const RPC_SCOPE_CONFIG = Constants.RPC_SCOPE_CONFIG;
const result = size.fileFinishedImporting("modules/rpc/helpers/validateScope.tsx");

export default function validateScope(has, str) {
  let closure_0 = has;
  if (null == str) {
    return true;
  } else if (typeof str === "string") {
    return has.has(str);
  } else if (typeof str !== "object") {
    return false;
  } else {
    const _Array2 = Array;
    const isArray = Array.isArray(obj);
    let tmp = !isArray;
    if (isArray) {
      tmp = !obj.some((item) => set.has(item));
    }
    let tmp2 = !tmp;
    if (tmp) {
      const _Array = Array;
      const isArray1 = Array.isArray(obj2);
      let tmp4 = !isArray1;
      if (isArray1) {
        tmp4 = !obj2.every((item) => set.has(item));
      }
      tmp2 = !tmp4;
    }
    return tmp2;
  }
};
