// Module ID: 15343
// Function ID: 15344
// Name: isDateValidDateOfBirth
// Dependencies: [3979, 2]
// Exports: default

// Module 15343 (isDateValidDateOfBirth)
import set from "set" /* 2 */;
import hooksDefault from "hooks" /* 3979 */;

const result = set.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = hooksDefault().diff(arg0, "days") >= 1;
    const obj = hooksDefault();
  }
  return tmp;
};
