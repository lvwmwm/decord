// Module ID: 3841
// Function ID: 3842
// Name: getDefaultOptions
// Dependencies: [3822, 3577]
// Exports: default

// Module 3841 (getDefaultOptions)
import getDefaultOptions from "getDefaultOptions" /* 3577 */;
import assign from "assign" /* 3822 */;

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
