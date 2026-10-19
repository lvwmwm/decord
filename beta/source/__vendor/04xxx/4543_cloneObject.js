// Module ID: 4543
// Function ID: 4544
// Name: cloneObject
// Dependencies: [4544]
// Exports: default

// Module 4543 (cloneObject)
import assign_mod from "assign" /* 4544 */;

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
