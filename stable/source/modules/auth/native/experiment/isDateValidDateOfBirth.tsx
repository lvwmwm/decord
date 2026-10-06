// Module ID: 15608
// Function ID: 15609
// Name: isDateValidDateOfBirth
// Dependencies: [4424, 2]
// Exports: default

// Module 15608 (isDateValidDateOfBirth)
import _modDef4424 from "module_4424" /* 4424 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const obj = _modDef4424();
    tmp = obj.diff(arg0, "days") >= 1;
  }
  return tmp;
};
