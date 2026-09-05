// Module ID: 1953
// Function ID: 1954
// Name: isActionRequired
// Dependencies: [1950, 1951, 2]
// Exports: default

// Module 1953 (isActionRequired)
import closure_0 from "handleUpdateUser" /* 1950 */;
import closure_1 from "handleRequiredAction" /* 1951 */;

const result = require("set").fileFinishedImporting("modules/core/isActionRequired.tsx");

export default function isActionRequired() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = closure_0;
  }
  let obj2 = arg1;
  if (arg1 === undefined) {
    obj2 = closure_1;
  }
  let tmp = null != obj2.getAction();
  if (!tmp) {
    const _Object = Object;
    tmp = Object.keys(obj.getState()).length > 0;
  }
  return tmp;
};
