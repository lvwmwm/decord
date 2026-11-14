// Module ID: 4854
// Function ID: 4855
// Name: getDefaultOptions
// Dependencies: [4835, 4590]
// Exports: default

// Module 4854 (getDefaultOptions)
import _mod4590 from "module_4590" /* 4590 */;
import assign_mod from "assign" /* 4835 */;

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
  return assign.default({}, _mod4590.getDefaultOptions());
};
