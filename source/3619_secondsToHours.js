// Module ID: 3619
// Function ID: 27868
// Name: secondsToHours
// Dependencies: [3211, 3389]
// Exports: default

// Module 3619 (secondsToHours)
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
  return Math.floor(arg0 / require(3389) /* keys */.secondsInHour);
};
export default exports.default;
