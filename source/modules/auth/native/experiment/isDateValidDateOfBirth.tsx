// Module ID: 15129
// Function ID: 15130
// Name: isDateValidDateOfBirth
// Dependencies: [3902, 2]
// Exports: default

// Module 15129 (isDateValidDateOfBirth)
const result = require("set").fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = importDefault(3902)().diff(arg0, "days") >= 1;
    const obj = importDefault(3902)();
  }
  return tmp;
};
