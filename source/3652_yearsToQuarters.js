// Module ID: 3652
// Function ID: 27954
// Name: yearsToQuarters
// Dependencies: [3210, 3388]
// Exports: default

// Module 3652 (yearsToQuarters)
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
  return Math.floor(arg0 * require(3388) /* keys */.quartersInYear);
};
export default exports.default;
