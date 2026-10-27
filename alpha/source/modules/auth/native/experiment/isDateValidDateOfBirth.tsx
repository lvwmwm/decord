// Module ID: 17440
// Function ID: 17441
// Name: isDateValidDateOfBirth
// Dependencies: [2046, 2]
// Exports: default

// Module 17440 (isDateValidDateOfBirth)
import _modDef2046 from "module_2046" /* 2046 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const obj = _modDef2046();
    tmp = obj.diff(arg0, "days") >= 1;
  }
  return tmp;
};
