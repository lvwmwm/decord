// Module ID: 16385
// Function ID: 16386
// Name: isDateValidDateOfBirth
// Dependencies: [4702, 2]
// Exports: default

// Module 16385 (isDateValidDateOfBirth)
import _modDef4702 from "module_4702" /* 4702 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const obj = _modDef4702();
    tmp = obj.diff(arg0, "days") >= 1;
  }
  return tmp;
};
