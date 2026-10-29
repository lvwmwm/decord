// Module ID: 17911
// Function ID: 17912
// Name: isDateValidDateOfBirth
// Dependencies: [2047, 2]
// Exports: default

// Module 17911 (isDateValidDateOfBirth)
import _modDef2047 from "module_2047" /* 2047 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const obj = _modDef2047();
    tmp = obj.diff(arg0, "days") >= 1;
  }
  return tmp;
};
