// Module ID: 4689
// Function ID: 4690
// Name: getDefaultOptions
// Dependencies: [4670, 4425]
// Exports: default

// Module 4689 (getDefaultOptions)
import _mod4425 from "module_4425" /* 4425 */;
import assign_mod from "assign" /* 4670 */;

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
  return assign.default({}, _mod4425.getDefaultOptions());
};
