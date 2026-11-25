// Module ID: 17637
// Function ID: 17638
// Name: isDateValidDateOfBirth
// Dependencies: [2168, 2]
// Exports: default

// Module 17637 (isDateValidDateOfBirth)
import _modDef2168 from "module_2168" /* 2168 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const obj = _modDef2168();
    tmp = obj.diff(arg0, "days") >= 1;
  }
  return tmp;
};
