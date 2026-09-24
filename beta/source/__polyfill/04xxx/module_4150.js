// Module ID: 4150
// Function ID: 4151
// Dependencies: [4131, 3886]
// Exports: default

// Module 4150
import _mod3886 from "module_3886" /* 3886 */;
import assign_mod from "assign" /* 4131 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3886.getDefaultOptions());
};
export default exports.default;
