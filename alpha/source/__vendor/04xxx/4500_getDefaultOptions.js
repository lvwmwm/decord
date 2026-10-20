// Module ID: 4500
// Function ID: 4501
// Name: getDefaultOptions
// Dependencies: [4481, 4236]
// Exports: default

// Module 4500 (getDefaultOptions)
import _mod4236 from "module_4236" /* 4236 */;
import assign_mod from "assign" /* 4481 */;

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
  return assign.default({}, _mod4236.getDefaultOptions());
};
