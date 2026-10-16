// Module ID: 4527
// Function ID: 4528
// Name: getDefaultOptions
// Dependencies: [4508, 4263]
// Exports: default

// Module 4527 (getDefaultOptions)
import _mod4263 from "module_4263" /* 4263 */;
import assign_mod from "assign" /* 4508 */;

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
  return assign.default({}, _mod4263.getDefaultOptions());
};
