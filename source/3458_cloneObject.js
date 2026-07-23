// Module ID: 3458
// Function ID: 26804
// Name: cloneObject
// Dependencies: [3459]
// Exports: default

// Module 3458 (cloneObject)
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
