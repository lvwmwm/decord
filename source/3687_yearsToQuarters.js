// Module ID: 3687
// Function ID: 28069
// Name: yearsToQuarters
// Dependencies: [3245, 3423]
// Exports: default

// Module 3687 (yearsToQuarters)
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
  return Math.floor(arg0 * require(3423) /* keys */.quartersInYear);
};
export default exports.default;
