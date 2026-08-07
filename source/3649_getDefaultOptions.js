// Module ID: 3649
// Function ID: 3650
// Name: getDefaultOptions
// Dependencies: [3630, 3385]
// Exports: default

// Module 3649 (getDefaultOptions)
import assign from "assign";

if (!assign) {
  const obj = { default: null };
  obj[0] = assign;
  let tmp3 = obj;
} else {
  tmp3 = assign;
}

export default function getDefaultOptions() {
  return tmp3.default({}, require(3385) /* getDefaultOptions */.getDefaultOptions());
};
export default exports.default;
