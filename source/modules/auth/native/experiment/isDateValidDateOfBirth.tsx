// Module ID: 15505
// Function ID: 15506
// Name: isDateValidDateOfBirth
// Dependencies: [4044, 2]
// Exports: default

// Module 15505 (isDateValidDateOfBirth)
import set from "set" /* 2 */;
import hooksDefault from "hooks" /* 4044 */;

const result = set.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = hooksDefault().diff(arg0, "days") >= 1;
    const obj = hooksDefault();
  }
  return tmp;
};
