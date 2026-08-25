// Module ID: 3725
// Function ID: 3726
// Name: cloneObject
// Dependencies: [3726]
// Exports: default

// Module 3725 (cloneObject)
import assign from "assign" /* 3726 */;

if (!assign) {
  const obj = { default: null };
  obj[0] = assign;
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function cloneObject(arg0) {
  return assign.default({}, arg0);
};
export default exports.default;
