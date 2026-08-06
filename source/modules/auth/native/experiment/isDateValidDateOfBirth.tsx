// Module ID: 15032
// Function ID: 15033
// Name: isDateValidDateOfBirth
// Dependencies: [3866, 2]
// Exports: default

// Module 15032 (isDateValidDateOfBirth)
const result = require("set").fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = importDefault(3866)().diff(arg0, "days") >= 1;
    const obj = importDefault(3866)();
  }
  return tmp;
};
