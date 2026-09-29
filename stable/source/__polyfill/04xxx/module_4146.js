// Module ID: 4146
// Function ID: 4147
// Dependencies: [4127, 3882]
// Exports: default

// Module 4146
import _mod3882 from "module_3882" /* 3882 */;
import assign_mod from "assign" /* 4127 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3882.getDefaultOptions());
};
export default exports.default;
