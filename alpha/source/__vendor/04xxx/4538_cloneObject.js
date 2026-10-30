// Module ID: 4538
// Function ID: 4539
// Name: cloneObject
// Dependencies: [4539]
// Exports: default

// Module 4538 (cloneObject)
import assign_mod from "assign" /* 4539 */;

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
