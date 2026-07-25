// Module ID: 3593
// Function ID: 27790
// Name: minutesToHours
// Dependencies: [3211, 3389]
// Exports: default

// Module 3593 (minutesToHours)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let closure_2 = tmp3;

export default function minutesToHours(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3389) /* keys */.minutesInHour);
};
export default exports.default;
