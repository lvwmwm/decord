// Module ID: 4405
// Function ID: 38879
// Name: shimStringTrim
// Dependencies: [1381, 4398, 1382]

// Module 4405 (shimStringTrim)
let closure_2 = require("hasPropertyDescriptors")();

export default function shimStringTrim() {
  const tmp = require(4398) /* getPolyfill */();
  if (String.prototype.trim !== tmp) {
    const tmp5 = require(1382) /* defineDataProperty */;
    const _String = String;
    if (closure_2) {
      tmp5(prototype, "trim", tmp, true);
    } else {
      tmp5(prototype, "trim", tmp);
    }
  }
  return tmp;
};
