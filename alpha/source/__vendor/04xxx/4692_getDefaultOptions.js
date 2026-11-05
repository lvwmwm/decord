// Module ID: 4692
// Function ID: 4693
// Name: getDefaultOptions
// Dependencies: [4673, 4428]
// Exports: default

// Module 4692 (getDefaultOptions)
import _mod4428 from "module_4428" /* 4428 */;
import assign_mod from "assign" /* 4673 */;

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
  return assign.default({}, _mod4428.getDefaultOptions());
};
