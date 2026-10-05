// Module ID: 15903
// Function ID: 15904
// Name: isDateValidDateOfBirth
// Dependencies: [4461, 2]
// Exports: default

// Module 15903 (isDateValidDateOfBirth)
import _modDef4461 from "module_4461" /* 4461 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const obj = _modDef4461();
    tmp = obj.diff(arg0, "days") >= 1;
  }
  return tmp;
};
