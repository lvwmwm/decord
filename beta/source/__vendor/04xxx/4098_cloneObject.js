// Module ID: 4098
// Function ID: 4099
// Name: cloneObject
// Dependencies: [4099]
// Exports: default

// Module 4098 (cloneObject)
import assign_mod from "assign" /* 4099 */;

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
