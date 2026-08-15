// Module ID: 4419
// Function ID: 4420
// Name: shimStringTrim
// Dependencies: [1424, 4412, 1425]

// Module 4419 (shimStringTrim)
let closure_2 = require("hasPropertyDescriptors")();

export default function shimStringTrim() {
  const tmp3 = require(4412) /* getPolyfill */();
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
