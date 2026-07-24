// Module ID: 3595
// Function ID: 27785
// Name: monthsToQuarters
// Dependencies: [3210, 3388]
// Exports: default

// Module 3595 (monthsToQuarters)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let closure_2 = tmp3;

export default function monthsToQuarters(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3388) /* keys */.monthsInQuarter);
};
export default exports.default;
