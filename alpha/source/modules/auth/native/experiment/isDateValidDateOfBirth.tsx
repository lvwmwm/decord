// Module ID: 17024
// Function ID: 17025
// Name: isDateValidDateOfBirth
// Dependencies: [4761, 2]
// Exports: default

// Module 17024 (isDateValidDateOfBirth)
import _modDef4761 from "module_4761" /* 4761 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const obj = _modDef4761();
    tmp = obj.diff(arg0, "days") >= 1;
  }
  return tmp;
};
