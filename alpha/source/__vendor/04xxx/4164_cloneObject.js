// Module ID: 4164
// Function ID: 4165
// Name: cloneObject
// Dependencies: [4165]
// Exports: default

// Module 4164 (cloneObject)
import assign_mod from "assign" /* 4165 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function cloneObject(arg0) {
  return assign.default({}, arg0);
};
export default exports.default;
