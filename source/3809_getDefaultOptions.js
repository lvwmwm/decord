// Module ID: 3809
// Function ID: 3810
// Name: getDefaultOptions
// Dependencies: [3790, 3545]
// Exports: default

// Module 3809 (getDefaultOptions)
import getDefaultOptions from "getDefaultOptions" /* 3545 */;
import assign from "assign" /* 3790 */;

if (!assign) {
  const obj = { default: null };
  obj[0] = assign;
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, getDefaultOptions.getDefaultOptions());
};
export default exports.default;
