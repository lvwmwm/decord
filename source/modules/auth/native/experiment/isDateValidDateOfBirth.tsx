// Module ID: 14815
// Function ID: 112973
// Name: isDateValidDateOfBirth
// Dependencies: [3712, 2]
// Exports: default

// Module 14815 (isDateValidDateOfBirth)
const result = require("set").fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = importDefault(3712)().diff(arg0, "days") >= 1;
    const obj = importDefault(3712)();
  }
  return tmp;
};
