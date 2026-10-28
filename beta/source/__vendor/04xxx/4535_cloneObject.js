// Module ID: 4535
// Function ID: 4536
// Name: cloneObject
// Dependencies: [4536]
// Exports: default

// Module 4535 (cloneObject)
import assign_mod from "assign" /* 4536 */;

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
