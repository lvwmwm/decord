// Module ID: 4524
// Function ID: 4525
// Name: getDefaultOptions
// Dependencies: [4505, 4260]
// Exports: default

// Module 4524 (getDefaultOptions)
import _mod4260 from "module_4260" /* 4260 */;
import assign_mod from "assign" /* 4505 */;

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
  return assign.default({}, _mod4260.getDefaultOptions());
};
