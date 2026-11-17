// Module ID: 4858
// Function ID: 4859
// Name: getDefaultOptions
// Dependencies: [4839, 4594]
// Exports: default

// Module 4858 (getDefaultOptions)
import _mod4594 from "module_4594" /* 4594 */;
import assign_mod from "assign" /* 4839 */;

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
  return assign.default({}, _mod4594.getDefaultOptions());
};
