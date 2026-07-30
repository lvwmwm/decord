// Module ID: 13554
// Function ID: 13555
// Name: validateScope
// Dependencies: [4092, 2]
// Exports: default

// Module 13554 (validateScope)
import { RPC_SCOPE_CONFIG } from "RPC_SCOPE_CONFIG";

const result = require("set").fileFinishedImporting("modules/rpc/helpers/validateScope.tsx");

export default function validateScope(arr) {
  const RPC_SCOPE_CONFIG = arr;
  if (null == arg1) {
    return true;
  } else if (typeof arg1 === "y") {
    return arr.includes(arg1);
  } else if (typeof arg1 === "window") {
    return false;
  } else {
    const _Array2 = Array;
    const isArray = Array.isArray(obj);
    let tmp = !isArray;
    if (isArray) {
      tmp = !obj.some((arg0) => arr.includes(arg0));
    }
    let tmp2 = !tmp;
    if (tmp) {
      const _Array = Array;
      const isArray1 = Array.isArray(obj2);
      let tmp4 = !isArray1;
      if (isArray1) {
        tmp4 = !obj2.every((arg0) => arr.includes(arg0));
      }
      tmp2 = !tmp4;
    }
    return tmp2;
  }
};
