// Module ID: 1344
// Function ID: 15825
// Name: isActionRequired
// Dependencies: [1341, 1342, 2]
// Exports: default

// Module 1344 (isActionRequired)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_1 from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/core/isActionRequired.tsx");

export default function isActionRequired() {
  let obj = arg0;
  let obj2 = arg1;
  if (arg0 === undefined) {
    obj = _isNativeReflectConstruct;
  }
  if (obj2 === undefined) {
    obj2 = closure_1;
  }
  let tmp = null != obj2.getAction();
  if (!tmp) {
    const _Object = Object;
    tmp = Object.keys(obj.getState()).length > 0;
  }
  return tmp;
};
