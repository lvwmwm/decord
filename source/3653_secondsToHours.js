// Module ID: 3653
// Function ID: 27970
// Name: secondsToHours
// Dependencies: [3245, 3423]
// Exports: default

// Module 3653 (secondsToHours)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let closure_2 = tmp3;

export default function secondsToHours(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3423) /* keys */.secondsInHour);
};
export default exports.default;
