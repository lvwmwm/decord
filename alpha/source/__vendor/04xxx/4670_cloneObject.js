// Module ID: 4670
// Function ID: 4671
// Name: cloneObject
// Dependencies: [4671]
// Exports: default

// Module 4670 (cloneObject)
import assign_mod from "assign" /* 4671 */;

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
