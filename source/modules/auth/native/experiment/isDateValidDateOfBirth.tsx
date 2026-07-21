// Module ID: 14642
// Function ID: 110413
// Name: isDateValidDateOfBirth
// Dependencies: []
// Exports: default

// Module 14642 (isDateValidDateOfBirth)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = importDefault(dependencyMap[0])().diff(arg0, "days") >= 1;
    const obj = importDefault(dependencyMap[0])();
  }
  return tmp;
};
