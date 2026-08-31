// Module ID: 3791
// Function ID: 3792
// Name: cloneObject
// Dependencies: [3792]
// Exports: default

// Module 3791 (cloneObject)
import assign from "assign" /* 3792 */;

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
