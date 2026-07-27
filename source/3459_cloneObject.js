// Module ID: 3459
// Function ID: 26817
// Name: cloneObject
// Dependencies: [3460]
// Exports: default

// Module 3459 (cloneObject)
import assign from "assign";

if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
let closure_0 = tmp3;

export default function cloneObject(defaultResult2) {
  return tmp3.default({}, defaultResult2);
};
export default exports.default;
