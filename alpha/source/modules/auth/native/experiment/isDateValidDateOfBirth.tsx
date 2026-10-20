// Module ID: 17150
// Function ID: 17151
// Name: isDateValidDateOfBirth
// Dependencies: [2050, 2]
// Exports: default

// Module 17150 (isDateValidDateOfBirth)
import _modDef2050 from "module_2050" /* 2050 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const obj = _modDef2050();
    tmp = obj.diff(arg0, "days") >= 1;
  }
  return tmp;
};
