// Module ID: 15359
// Function ID: 117024
// Name: jsx
// Dependencies: [31, 8110, 33, 5550, 4524, 2]
// Exports: default

// Module 15359 (jsx)
import "result";
import module_8110 from "module_8110";
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
  return jsx(lockKeys(4524).Freeze, {});
};
