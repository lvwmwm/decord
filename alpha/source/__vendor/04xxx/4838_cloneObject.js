// Module ID: 4838
// Function ID: 4839
// Name: cloneObject
// Dependencies: [4839]
// Exports: default

// Module 4838 (cloneObject)
import assign_mod from "assign" /* 4839 */;

let tmp3;
let assign = assign_mod;
if (!assign) {
  tmp3 = { default: assign };
  const obj = { default: assign };
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function cloneObject(arg0) {
  return assign.default({}, arg0);
};
