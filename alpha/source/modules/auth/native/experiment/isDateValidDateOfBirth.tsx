// Module ID: 18170
// Function ID: 18171
// Name: isDateValidDateOfBirth
// Dependencies: [2171, 2]
// Exports: default

// Module 18170 (isDateValidDateOfBirth)
import _modDef2171 from "module_2171" /* 2171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const obj = _modDef2171();
    tmp = obj.diff(arg0, "days") >= 1;
  }
  return tmp;
};
