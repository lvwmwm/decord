// Module ID: 3633
// Function ID: 3634
// Name: getDefaultOptions
// Dependencies: [3614, 3369]
// Exports: default

// Module 3633 (getDefaultOptions)
import assign from "assign";

if (!assign) {
  const obj = { default: null };
  obj[0] = assign;
  let tmp3 = obj;
} else {
  tmp3 = assign;
}

export default function getDefaultOptions() {
  return tmp3.default({}, require(3369) /* getDefaultOptions */.getDefaultOptions());
};
export default exports.default;
