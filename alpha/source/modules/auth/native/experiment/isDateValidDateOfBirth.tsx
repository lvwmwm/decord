// Module ID: 17098
// Function ID: 17099
// Name: isDateValidDateOfBirth
// Dependencies: [4797, 2]
// Exports: default

// Module 17098 (isDateValidDateOfBirth)
import _modDef4797 from "module_4797" /* 4797 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const obj = _modDef4797();
    tmp = obj.diff(arg0, "days") >= 1;
  }
  return tmp;
};
