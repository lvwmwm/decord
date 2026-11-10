// Module ID: 4563
// Function ID: 4564
// Name: getDefaultOptions
// Dependencies: [4544, 4299]
// Exports: default

// Module 4563 (getDefaultOptions)
import _mod4299 from "module_4299" /* 4299 */;
import assign_mod from "assign" /* 4544 */;

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
  return assign.default({}, _mod4299.getDefaultOptions());
};
