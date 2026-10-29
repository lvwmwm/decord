// Module ID: 4557
// Function ID: 4558
// Name: getDefaultOptions
// Dependencies: [4538, 4293]
// Exports: default

// Module 4557 (getDefaultOptions)
import _mod4293 from "module_4293" /* 4293 */;
import assign_mod from "assign" /* 4538 */;

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
  return assign.default({}, _mod4293.getDefaultOptions());
};
