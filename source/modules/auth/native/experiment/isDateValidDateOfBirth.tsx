// Module ID: 15014
// Function ID: 15015
// Name: isDateValidDateOfBirth
// Dependencies: [3867, 2]
// Exports: default

// Module 15014 (isDateValidDateOfBirth)
const result = require("set").fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = importDefault(3867)().diff(arg0, "days") >= 1;
    const obj = importDefault(3867)();
  }
  return tmp;
};
