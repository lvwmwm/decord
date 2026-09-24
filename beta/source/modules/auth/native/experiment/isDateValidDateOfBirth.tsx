// Module ID: 16327
// Function ID: 16328
// Name: isDateValidDateOfBirth
// Dependencies: [4384, 2]
// Exports: default

// Module 16327 (isDateValidDateOfBirth)
import _modDef4384 from "module_4384" /* 4384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef4384().diff(arg0, "days") >= 1;
    const obj = _modDef4384();
  }
  return tmp;
};
