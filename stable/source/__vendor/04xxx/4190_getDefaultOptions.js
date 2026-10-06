// Module ID: 4190
// Function ID: 4191
// Name: getDefaultOptions
// Dependencies: [4171, 3926]
// Exports: default

// Module 4190 (getDefaultOptions)
import _mod3926 from "module_3926" /* 3926 */;
import assign_mod from "assign" /* 4171 */;

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
  return assign.default({}, _mod3926.getDefaultOptions());
};
