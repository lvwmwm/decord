// Module ID: 3650
// Function ID: 27963
// Name: quartersToMonths
// Dependencies: [3245, 3423]
// Exports: default

// Module 3650 (quartersToMonths)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let closure_2 = tmp3;

export default function quartersToMonths(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(3423) /* keys */.monthsInQuarter);
};
export default exports.default;
