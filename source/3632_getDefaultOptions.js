// Module ID: 3632
// Function ID: 3633
// Name: getDefaultOptions
// Dependencies: [3613, 3368]
// Exports: default

// Module 3632 (getDefaultOptions)
import assign from "assign";

if (!assign) {
  const obj = { default: null };
  obj[0] = assign;
  let tmp3 = obj;
} else {
  tmp3 = assign;
}

export default function getDefaultOptions() {
  return tmp3.default({}, require(3368) /* getDefaultOptions */.getDefaultOptions());
};
export default exports.default;
