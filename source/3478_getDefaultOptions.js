// Module ID: 3478
// Function ID: 26865
// Name: getDefaultOptions
// Dependencies: [3459, 3214]
// Exports: default

// Module 3478 (getDefaultOptions)
import assign from "assign";

if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
let closure_2 = tmp3;

export default function getDefaultOptions() {
  return tmp3.default({}, require(3214) /* getDefaultOptions */.getDefaultOptions());
};
export default exports.default;
