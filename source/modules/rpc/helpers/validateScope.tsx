// Module ID: 13492
// Function ID: 103766
// Name: validateScope
// Dependencies: [4034, 2]
// Exports: default

// Module 13492 (validateScope)
import { RPC_SCOPE_CONFIG } from "RPC_SCOPE_CONFIG";

const result = require("set").fileFinishedImporting("modules/rpc/helpers/validateScope.tsx");

export default function validateScope(arr) {
  const RPC_SCOPE_CONFIG = arr;
  if (null == arg1) {
    return true;
  } else if ("string" === typeof arg1) {
    return arr.includes(arg1);
  } else if ("object" !== tmp4) {
    return false;
  } else {
    const _Array2 = Array;
    const tmp = !Array.isArray(arg1[RPC_SCOPE_CONFIG.ANY]) || !arg1[RPC_SCOPE_CONFIG.ANY].some((arg0) => arr.includes(arg0));
    let tmp2 = !tmp;
    if (tmp) {
      const _Array = Array;
      tmp2 = !(!Array.isArray(obj2) || !obj2.every((arg0) => arr.includes(arg0)));
      const tmp3 = !Array.isArray(obj2) || !obj2.every((arg0) => arr.includes(arg0));
    }
    return tmp2;
  }
};
