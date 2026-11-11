// Module ID: 4791
// Function ID: 4792
// Name: getDefaultOptions
// Dependencies: [4772, 4527]
// Exports: default

// Module 4791 (getDefaultOptions)
import _mod4527 from "module_4527" /* 4527 */;
import assign_mod from "assign" /* 4772 */;

let tmp3;
let assign = assign_mod;
if (!assign) {
  tmp3 = { default: assign };
  const obj = { default: assign };
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4527.getDefaultOptions());
};
