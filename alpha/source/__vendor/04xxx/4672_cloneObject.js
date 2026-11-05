// Module ID: 4672
// Function ID: 4673
// Name: cloneObject
// Dependencies: [4673]
// Exports: default

// Module 4672 (cloneObject)
import assign_mod from "assign" /* 4673 */;

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
