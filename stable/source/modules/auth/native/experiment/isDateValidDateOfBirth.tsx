// Module ID: 16317
// Function ID: 16318
// Name: isDateValidDateOfBirth
// Dependencies: [4380, 2]
// Exports: default

// Module 16317 (isDateValidDateOfBirth)
import _modDef4380 from "module_4380" /* 4380 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef4380().diff(arg0, "days") >= 1;
    const obj = _modDef4380();
  }
  return tmp;
};
