// Module ID: 16991
// Function ID: 16992
// Name: isDateValidDateOfBirth
// Dependencies: [4758, 2]
// Exports: default

// Module 16991 (isDateValidDateOfBirth)
import _modDef4758 from "module_4758" /* 4758 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const obj = _modDef4758();
    tmp = obj.diff(arg0, "days") >= 1;
  }
  return tmp;
};
