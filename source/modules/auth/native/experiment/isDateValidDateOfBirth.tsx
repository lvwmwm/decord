// Module ID: 15015
// Function ID: 15016
// Name: isDateValidDateOfBirth
// Dependencies: [3867, 2]
// Exports: default

// Module 15015 (isDateValidDateOfBirth)
const result = require("set").fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = importDefault(3867)().diff(arg0, "days") >= 1;
    const obj = importDefault(3867)();
  }
  return tmp;
};
