// Module ID: 3686
// Function ID: 28067
// Name: yearsToMonths
// Dependencies: [3245, 3423]
// Exports: default

// Module 3686 (yearsToMonths)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let closure_2 = tmp3;

export default function yearsToMonths(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(3423) /* keys */.monthsInYear);
};
export default exports.default;
