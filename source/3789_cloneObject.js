// Module ID: 3789
// Function ID: 3790
// Name: cloneObject
// Dependencies: [3790]
// Exports: default

// Module 3789 (cloneObject)
import assign from "assign" /* 3790 */;

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
