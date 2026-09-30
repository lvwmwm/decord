// Module ID: 4197
// Function ID: 4198
// Name: cloneObject
// Dependencies: [4198]
// Exports: default

// Module 4197 (cloneObject)
import assign_mod from "assign" /* 4198 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function cloneObject(arg0) {
  return assign.default({}, arg0);
};
export default exports.default;
