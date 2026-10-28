// Module ID: 4555
// Function ID: 4556
// Name: getDefaultOptions
// Dependencies: [4536, 4291]
// Exports: default

// Module 4555 (getDefaultOptions)
import _mod4291 from "module_4291" /* 4291 */;
import assign_mod from "assign" /* 4536 */;

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
  return assign.default({}, _mod4291.getDefaultOptions());
};
