// Module ID: 4468
// Function ID: 4469
// Name: getDefaultOptions
// Dependencies: [4449, 4204]
// Exports: default

// Module 4468 (getDefaultOptions)
import _mod4204 from "module_4204" /* 4204 */;
import assign_mod from "assign" /* 4449 */;

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
  return assign.default({}, _mod4204.getDefaultOptions());
};
