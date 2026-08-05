// Module ID: 13646
// Function ID: 13647
// Name: validateScope
// Dependencies: [4158, 2]
// Exports: default

// Module 13646 (validateScope)
import { RPC_SCOPE_CONFIG } from "RPC_SCOPE_CONFIG";

const result = require("set").fileFinishedImporting("modules/rpc/helpers/validateScope.tsx");

export default function validateScope(arr, str) {
  const RPC_SCOPE_CONFIG = arr;
  if (null == str) {
    return true;
  } else if (typeof str === "string") {
    return arr.includes(str);
  } else if (typeof str !== "object") {
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
