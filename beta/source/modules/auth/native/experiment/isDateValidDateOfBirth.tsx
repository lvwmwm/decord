// Module ID: 18690
// Function ID: 18691
// Name: isDateValidDateOfBirth
// Dependencies: [2169, 2]
// Exports: default

// Module 18690 (isDateValidDateOfBirth)
import _modDef2169 from "module_2169" /* 2169 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const obj = _modDef2169();
    tmp = obj.diff(arg0, "days") >= 1;
  }
  return tmp;
};
