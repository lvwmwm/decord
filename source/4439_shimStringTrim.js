// Module ID: 4439
// Function ID: 38993
// Name: shimStringTrim
// Dependencies: [1381, 4432, 1382]

// Module 4439 (shimStringTrim)
let closure_2 = require("hasPropertyDescriptors")();

export default function shimStringTrim() {
  const tmp = require(4432) /* getPolyfill */();
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
