// Module ID: 16318
// Function ID: 16319
// Name: isDateValidDateOfBirth
// Dependencies: [4661, 2]
// Exports: default

// Module 16318 (isDateValidDateOfBirth)
import _modDef4661 from "module_4661" /* 4661 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const obj = _modDef4661();
    tmp = obj.diff(arg0, "days") >= 1;
  }
  return tmp;
};
