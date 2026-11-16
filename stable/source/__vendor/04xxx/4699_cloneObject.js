// Module ID: 4699
// Function ID: 4700
// Name: cloneObject
// Dependencies: [4700]
// Exports: default

// Module 4699 (cloneObject)
import assign_mod from "assign" /* 4700 */;

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
