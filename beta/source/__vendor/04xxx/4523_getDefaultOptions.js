// Module ID: 4523
// Function ID: 4524
// Name: getDefaultOptions
// Dependencies: [4504, 4259]
// Exports: default

// Module 4523 (getDefaultOptions)
import _mod4259 from "module_4259" /* 4259 */;
import assign_mod from "assign" /* 4504 */;

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
  return assign.default({}, _mod4259.getDefaultOptions());
};
