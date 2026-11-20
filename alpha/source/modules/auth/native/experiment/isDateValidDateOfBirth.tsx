// Module ID: 17362
// Function ID: 17363
// Name: isDateValidDateOfBirth
// Dependencies: [2167, 2]
// Exports: default

// Module 17362 (isDateValidDateOfBirth)
import _modDef2167 from "module_2167" /* 2167 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const obj = _modDef2167();
    tmp = obj.diff(arg0, "days") >= 1;
  }
  return tmp;
};
