// Module ID: 4167
// Function ID: 4168
// Name: cloneObject
// Dependencies: [4168]
// Exports: default

// Module 4167 (cloneObject)
import assign_mod from "assign" /* 4168 */;

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
