// Module ID: 13297
// Function ID: 101073
// Name: validateScope
// Dependencies: []
// Exports: default

// Module 13297 (validateScope)
const RPC_SCOPE_CONFIG = require(dependencyMap[0]).RPC_SCOPE_CONFIG;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/rpc/helpers/validateScope.tsx");

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
    const tmp = !Array.isArray(arg1[closure_0.ANY]) || !arg1[closure_0.ANY].some((arg0) => arg0.includes(arg0));
    let tmp2 = !tmp;
    if (tmp) {
      const _Array = Array;
      tmp2 = !(!Array.isArray(obj2) || !obj2.every((arg0) => arg0.includes(arg0)));
      const tmp3 = !Array.isArray(obj2) || !obj2.every((arg0) => arg0.includes(arg0));
    }
    return tmp2;
  }
};
