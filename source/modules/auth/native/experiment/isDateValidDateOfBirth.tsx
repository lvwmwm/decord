// Module ID: 15118
// Function ID: 15119
// Name: isDateValidDateOfBirth
// Dependencies: [3883, 2]
// Exports: default

// Module 15118 (isDateValidDateOfBirth)
const result = require("set").fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = importDefault(3883)().diff(arg0, "days") >= 1;
    const obj = importDefault(3883)();
  }
  return tmp;
};
