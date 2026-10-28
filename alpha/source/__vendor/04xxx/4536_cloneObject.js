// Module ID: 4536
// Function ID: 4537
// Name: cloneObject
// Dependencies: [4537]
// Exports: default

// Module 4536 (cloneObject)
import assign_mod from "assign" /* 4537 */;

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
