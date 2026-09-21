// Module ID: 4118
// Function ID: 4119
// Dependencies: [4099, 3854]
// Exports: default

// Module 4118
import _mod3854 from "module_3854" /* 3854 */;
import assign_mod from "assign" /* 4099 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3854.getDefaultOptions());
};
export default exports.default;
