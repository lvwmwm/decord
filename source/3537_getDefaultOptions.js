// Module ID: 3537
// Function ID: 3538
// Name: getDefaultOptions
// Dependencies: [3518, 3273]
// Exports: default

// Module 3537 (getDefaultOptions)
import assign from "assign";

if (!assign) {
  const obj = { default: null };
  obj[0] = assign;
  let tmp3 = obj;
} else {
  tmp3 = assign;
}

export default function getDefaultOptions() {
  return tmp3.default({}, require(3273) /* getDefaultOptions */.getDefaultOptions());
};
export default exports.default;
