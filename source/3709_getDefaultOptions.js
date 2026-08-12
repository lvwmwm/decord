// Module ID: 3709
// Function ID: 3710
// Name: getDefaultOptions
// Dependencies: [3690, 3445]
// Exports: default

// Module 3709 (getDefaultOptions)
import assign from "assign";

if (!assign) {
  const obj = { default: null };
  obj[0] = assign;
  let tmp3 = obj;
} else {
  tmp3 = assign;
}

export default function getDefaultOptions() {
  return tmp3.default({}, require(3445) /* getDefaultOptions */.getDefaultOptions());
};
export default exports.default;
