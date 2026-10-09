// Module ID: 4407
// Function ID: 4408
// Name: cloneObject
// Dependencies: [4408]
// Exports: default

// Module 4407 (cloneObject)
import assign_mod from "assign" /* 4408 */;

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
