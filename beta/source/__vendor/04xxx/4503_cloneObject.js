// Module ID: 4503
// Function ID: 4504
// Name: cloneObject
// Dependencies: [4504]
// Exports: default

// Module 4503 (cloneObject)
import assign_mod from "assign" /* 4504 */;

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
