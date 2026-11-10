// Module ID: 18021
// Function ID: 18022
// Name: isDateValidDateOfBirth
// Dependencies: [2042, 2]
// Exports: default

// Module 18021 (isDateValidDateOfBirth)
import _modDef2042 from "module_2042" /* 2042 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const obj = _modDef2042();
    tmp = obj.diff(arg0, "days") >= 1;
  }
  return tmp;
};
