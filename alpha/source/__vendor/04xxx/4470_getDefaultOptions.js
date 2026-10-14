// Module ID: 4470
// Function ID: 4471
// Name: getDefaultOptions
// Dependencies: [4451, 4206]
// Exports: default

// Module 4470 (getDefaultOptions)
import _mod4206 from "module_4206" /* 4206 */;
import assign_mod from "assign" /* 4451 */;

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
  return assign.default({}, _mod4206.getDefaultOptions());
};
