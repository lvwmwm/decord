// Module ID: 3820
// Function ID: 3821
// Name: cloneObject
// Dependencies: [3821]
// Exports: default

// Module 3820 (cloneObject)
import assign from "assign" /* 3821 */;

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
