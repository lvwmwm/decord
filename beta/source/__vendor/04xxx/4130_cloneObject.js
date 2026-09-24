// Module ID: 4130
// Function ID: 4131
// Name: cloneObject
// Dependencies: [4131]
// Exports: default

// Module 4130 (cloneObject)
import assign_mod from "assign" /* 4131 */;

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
