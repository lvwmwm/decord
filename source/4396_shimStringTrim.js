// Module ID: 4396
// Function ID: 38770
// Name: shimStringTrim
// Dependencies: []

// Module 4396 (shimStringTrim)
let closure_2 = require(dependencyMap[0])();

export default function shimStringTrim() {
  const tmp = require(dependencyMap[1])();
  if (String.prototype.trim !== tmp) {
    const tmp5 = require(dependencyMap[2]);
    const _String = String;
    if (closure_2) {
      tmp5(prototype, "trim", tmp, true);
    } else {
      tmp5(prototype, "trim", tmp);
    }
  }
  return tmp;
};
