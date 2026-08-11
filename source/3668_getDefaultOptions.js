// Module ID: 3668
// Function ID: 3669
// Name: getDefaultOptions
// Dependencies: [3649, 3404]
// Exports: default

// Module 3668 (getDefaultOptions)
import assign from "assign";

if (!assign) {
  const obj = { default: null };
  obj[0] = assign;
  let tmp3 = obj;
} else {
  tmp3 = assign;
}

export default function getDefaultOptions() {
  return tmp3.default({}, require(3404) /* getDefaultOptions */.getDefaultOptions());
};
export default exports.default;
