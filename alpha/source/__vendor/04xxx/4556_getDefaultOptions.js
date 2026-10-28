// Module ID: 4556
// Function ID: 4557
// Name: getDefaultOptions
// Dependencies: [4537, 4292]
// Exports: default

// Module 4556 (getDefaultOptions)
import _mod4292 from "module_4292" /* 4292 */;
import assign_mod from "assign" /* 4537 */;

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
  return assign.default({}, _mod4292.getDefaultOptions());
};
