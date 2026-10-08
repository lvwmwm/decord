// Module ID: 16202
// Function ID: 16203
// Name: isDateValidDateOfBirth
// Dependencies: [4659, 2]
// Exports: default

// Module 16202 (isDateValidDateOfBirth)
import _modDef4659 from "module_4659" /* 4659 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const obj = _modDef4659();
    tmp = obj.diff(arg0, "days") >= 1;
  }
  return tmp;
};
