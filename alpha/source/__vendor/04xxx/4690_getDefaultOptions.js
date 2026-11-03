// Module ID: 4690
// Function ID: 4691
// Name: getDefaultOptions
// Dependencies: [4671, 4426]
// Exports: default

// Module 4690 (getDefaultOptions)
import _mod4426 from "module_4426" /* 4426 */;
import assign_mod from "assign" /* 4671 */;

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
  return assign.default({}, _mod4426.getDefaultOptions());
};
