// Module ID: 4448
// Function ID: 4449
// Name: cloneObject
// Dependencies: [4449]
// Exports: default

// Module 4448 (cloneObject)
import assign_mod from "assign" /* 4449 */;

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
