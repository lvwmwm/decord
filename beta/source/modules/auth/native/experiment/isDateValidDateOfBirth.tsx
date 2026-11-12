// Module ID: 18399
// Function ID: 18400
// Name: isDateValidDateOfBirth
// Dependencies: [2166, 2]
// Exports: default

// Module 18399 (isDateValidDateOfBirth)
import _modDef2166 from "module_2166" /* 2166 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const obj = _modDef2166();
    tmp = obj.diff(arg0, "days") >= 1;
  }
  return tmp;
};
