// Module ID: 3500
// Function ID: 26937
// Name: hoursToSeconds
// Dependencies: [3211, 3389]
// Exports: default

// Module 3500 (hoursToSeconds)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let closure_2 = tmp3;

export default function hoursToSeconds(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(3389) /* keys */.secondsInHour);
};
export default exports.default;
