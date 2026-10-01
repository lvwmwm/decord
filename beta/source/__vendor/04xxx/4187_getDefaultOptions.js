// Module ID: 4187
// Function ID: 4188
// Name: getDefaultOptions
// Dependencies: [4168, 3923]
// Exports: default

// Module 4187 (getDefaultOptions)
import _mod3923 from "module_3923" /* 3923 */;
import assign_mod from "assign" /* 4168 */;

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
  return assign.default({}, _mod3923.getDefaultOptions());
};
