// Module ID: 3513
// Function ID: 26980
// Name: getDefaultOptions
// Dependencies: [3494, 3249]
// Exports: default

// Module 3513 (getDefaultOptions)
import assign from "assign";

if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
let closure_2 = tmp3;

export default function getDefaultOptions() {
  return tmp3.default({}, require(3249) /* getDefaultOptions */.getDefaultOptions());
};
export default exports.default;
