// Module ID: 4427
// Function ID: 4428
// Name: getDefaultOptions
// Dependencies: [4408, 4163]
// Exports: default

// Module 4427 (getDefaultOptions)
import _mod4163 from "module_4163" /* 4163 */;
import assign_mod from "assign" /* 4408 */;

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
  return assign.default({}, _mod4163.getDefaultOptions());
};
