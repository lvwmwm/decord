// Module ID: 15710
// Function ID: 15711
// Name: jsx
// Dependencies: [19, 8907, 21, 5820, 4701, 2]
// Exports: default

// Module 15710 (jsx)
import "noop";
import module_8907 from "module_8907";
import { jsx } from "jsxProd";
import set from "set";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/panels/morphable/native/AppFreezer.tsx");

export default function AppFreezer(children) {
  let flag = children.manualFreeze;
  if (flag === undefined) {
    flag = false;
  }
  let placeholder = children.placeholder;
  if (placeholder === undefined) {
    placeholder = set;
  }
  let lockKeys = children.lockKeys;
  let freeze = callback((lockKeys) => {
    lockKeys = lockKeys.lockKeys;
    if (null != lockKeys) {
      let someResult = lockKeys.some((arg0) => lockKeys.has(arg0));
    } else {
      someResult = lockKeys.size > 0;
    }
    return someResult;
  });
  if (!freeze) {
    freeze = flag;
  }
  return jsx(lockKeys(4701).Freeze, { freeze, placeholder, children: children.children });
};
