// Module ID: 4834
// Function ID: 4835
// Name: cloneObject
// Dependencies: [4835]
// Exports: default

// Module 4834 (cloneObject)
import assign_mod from "assign" /* 4835 */;

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
