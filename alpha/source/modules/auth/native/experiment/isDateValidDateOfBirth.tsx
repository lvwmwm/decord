// Module ID: 17970
// Function ID: 17971
// Name: isDateValidDateOfBirth
// Dependencies: [2044, 2]
// Exports: default

// Module 17970 (isDateValidDateOfBirth)
import _modDef2044 from "module_2044" /* 2044 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const obj = _modDef2044();
    tmp = obj.diff(arg0, "days") >= 1;
  }
  return tmp;
};
