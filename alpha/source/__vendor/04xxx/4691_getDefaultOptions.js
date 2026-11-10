// Module ID: 4691
// Function ID: 4692
// Name: getDefaultOptions
// Dependencies: [4672, 4427]
// Exports: default

// Module 4691 (getDefaultOptions)
import _mod4427 from "module_4427" /* 4427 */;
import assign_mod from "assign" /* 4672 */;

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
  return assign.default({}, _mod4427.getDefaultOptions());
};
