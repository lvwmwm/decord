// Module ID: 17394
// Function ID: 17395
// Name: isDateValidDateOfBirth
// Dependencies: [2049, 2]
// Exports: default

// Module 17394 (isDateValidDateOfBirth)
import _modDef2049 from "module_2049" /* 2049 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const obj = _modDef2049();
    tmp = obj.diff(arg0, "days") >= 1;
  }
  return tmp;
};
