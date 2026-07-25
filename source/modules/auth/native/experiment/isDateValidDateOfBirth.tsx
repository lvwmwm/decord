// Module ID: 14826
// Function ID: 113101
// Name: isDateValidDateOfBirth
// Dependencies: [3713, 2]
// Exports: default

// Module 14826 (isDateValidDateOfBirth)
const result = require("set").fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = importDefault(3713)().diff(arg0, "days") >= 1;
    const obj = importDefault(3713)();
  }
  return tmp;
};
