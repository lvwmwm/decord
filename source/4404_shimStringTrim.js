// Module ID: 4404
// Function ID: 38867
// Name: shimStringTrim
// Dependencies: [1381, 4397, 1382]

// Module 4404 (shimStringTrim)
let closure_2 = require("hasPropertyDescriptors")();

export default function shimStringTrim() {
  const tmp = require(4397) /* getPolyfill */();
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
