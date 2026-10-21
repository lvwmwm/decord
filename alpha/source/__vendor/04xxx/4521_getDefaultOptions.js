// Module ID: 4521
// Function ID: 4522
// Name: getDefaultOptions
// Dependencies: [4502, 4257]
// Exports: default

// Module 4521 (getDefaultOptions)
import _mod4257 from "module_4257" /* 4257 */;
import assign_mod from "assign" /* 4502 */;

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
  return assign.default({}, _mod4257.getDefaultOptions());
};
