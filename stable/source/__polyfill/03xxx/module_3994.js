// Module ID: 3994
// Function ID: 3995
// Dependencies: [3975, 3730]
// Exports: default

// Module 3994
import _mod3730 from "module_3730" /* 3730 */;
import assign_mod from "assign" /* 3975 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3730.getDefaultOptions());
};
export default exports.default;
