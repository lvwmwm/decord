// Module ID: 4425
// Function ID: 4426
// Name: getDefaultOptions
// Dependencies: [4406, 4161]
// Exports: default

// Module 4425 (getDefaultOptions)
import _mod4161 from "module_4161" /* 4161 */;
import assign_mod from "assign" /* 4406 */;

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
  return assign.default({}, _mod4161.getDefaultOptions());
};
