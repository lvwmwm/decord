// Module ID: 4507
// Function ID: 4508
// Name: cloneObject
// Dependencies: [4508]
// Exports: default

// Module 4507 (cloneObject)
import assign_mod from "assign" /* 4508 */;

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
