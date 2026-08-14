// Module ID: 15200
// Function ID: 15201
// Name: isDateValidDateOfBirth
// Dependencies: [3943, 2]
// Exports: default

// Module 15200 (isDateValidDateOfBirth)
const result = require("set").fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = importDefault(3943)().diff(arg0, "days") >= 1;
    const obj = importDefault(3943)();
  }
  return tmp;
};
