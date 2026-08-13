// Module ID: 4617
// Function ID: 4618
// Name: shimStringTrim
// Dependencies: [1424, 4610, 1425]

// Module 4617 (shimStringTrim)
let closure_2 = require("hasPropertyDescriptors")();

export default function shimStringTrim() {
  const tmp3 = require(4610) /* getPolyfill */();
  if (String.prototype.trim !== tmp3) {
    const tmpResult = require(1425) /* defineDataProperty */;
    const _String = String;
    if (closure_2) {
      tmpResult(prototype, "trim", tmp3, true);
    } else {
      tmpResult(prototype, "trim", tmp3);
    }
  }
  return tmp3;
};
