// Module ID: 3603
// Function ID: 3604
// Name: getDefaultOptions
// Dependencies: [3584, 3339]
// Exports: default

// Module 3603 (getDefaultOptions)
import assign from "assign";

if (!assign) {
  const obj = { default: null };
  obj[0] = assign;
  let tmp3 = obj;
} else {
  tmp3 = assign;
}

export default function getDefaultOptions() {
  return tmp3.default({}, require(3339) /* getDefaultOptions */.getDefaultOptions());
};
export default exports.default;
