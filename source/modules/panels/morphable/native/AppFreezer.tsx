// Module ID: 15249
// Function ID: 116366
// Name: jsx
// Dependencies: [31, 8293, 33, 5517, 4489, 2]
// Exports: default

// Module 15249 (jsx)
import "result";
import module_8293 from "module_8293";
import { jsx } from "jsxProd";
import set from "set";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/panels/morphable/native/AppFreezer.tsx");

export default function AppFreezer(manualFreeze) {
  let flag = manualFreeze.manualFreeze;
  if (flag === undefined) {
    flag = false;
  }
  let placeholder = manualFreeze.placeholder;
  if (placeholder === undefined) {
    placeholder = set;
  }
  const lockKeys = manualFreeze.lockKeys;
  let tmp = callback((lockKeys) => (function shouldFreeze(lockKeys, lockKeys2) {
    let closure_0 = lockKeys;
    if (null != lockKeys2) {
      let someResult = lockKeys2.some((arg0) => lockKeys.has(arg0));
    } else {
      someResult = lockKeys.size > 0;
    }
    return someResult;
  })(lockKeys.lockKeys, lockKeys));
  const obj = {};
  if (!tmp) {
    tmp = flag;
  }
  obj.freeze = tmp;
  obj.placeholder = placeholder;
  obj.children = manualFreeze.children;
  return jsx(lockKeys(4489).Freeze, {});
};
