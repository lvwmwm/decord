// Module ID: 3479
// Function ID: 26878
// Name: getDefaultOptions
// Dependencies: [3460, 3215]
// Exports: default

// Module 3479 (getDefaultOptions)
import assign from "assign";

if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
let closure_2 = tmp3;

export default function getDefaultOptions() {
  return tmp3.default({}, require(3215) /* getDefaultOptions */.getDefaultOptions());
};
export default exports.default;
