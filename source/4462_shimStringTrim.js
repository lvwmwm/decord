// Module ID: 4462
// Function ID: 4463
// Name: shimStringTrim
// Dependencies: [1405, 4455, 1406]

// Module 4462 (shimStringTrim)
let closure_2 = require("hasPropertyDescriptors")();

export default function shimStringTrim() {
  const tmp3 = require(4455) /* getPolyfill */();
  if (String.prototype.trim !== tmp3) {
    const tmpResult = require(1406) /* defineDataProperty */;
    const _String = String;
    if (closure_2) {
      tmpResult(prototype, "trim", tmp3, true);
    } else {
      tmpResult(prototype, "trim", tmp3);
    }
  }
  return tmp3;
};
