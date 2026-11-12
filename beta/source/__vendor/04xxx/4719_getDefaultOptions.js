// Module ID: 4719
// Function ID: 4720
// Name: getDefaultOptions
// Dependencies: [4700, 4455]
// Exports: default

// Module 4719 (getDefaultOptions)
import _mod4455 from "module_4455" /* 4455 */;
import assign_mod from "assign" /* 4700 */;

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
  return assign.default({}, _mod4455.getDefaultOptions());
};
