// Module ID: 3597
// Function ID: 27798
// Name: monthsToYears
// Dependencies: [3211, 3389]
// Exports: default

// Module 3597 (monthsToYears)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let closure_2 = tmp3;

export default function monthsToYears(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3389) /* keys */.monthsInYear);
};
export default exports.default;
