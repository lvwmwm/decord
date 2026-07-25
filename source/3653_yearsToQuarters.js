// Module ID: 3653
// Function ID: 27966
// Name: yearsToQuarters
// Dependencies: [3211, 3389]
// Exports: default

// Module 3653 (yearsToQuarters)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let closure_2 = tmp3;

export default function yearsToQuarters(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(3389) /* keys */.quartersInYear);
};
export default exports.default;
