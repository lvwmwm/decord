// Module ID: 15249
// Function ID: 15250
// Name: isDateValidDateOfBirth
// Dependencies: [3975, 2]
// Exports: default

// Module 15249 (isDateValidDateOfBirth)
const result = require("set").fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = importDefault(3975)().diff(arg0, "days") >= 1;
    const obj = importDefault(3975)();
  }
  return tmp;
};
