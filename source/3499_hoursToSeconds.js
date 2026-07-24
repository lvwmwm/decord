// Module ID: 3499
// Function ID: 26926
// Name: hoursToSeconds
// Dependencies: [3210, 3388]
// Exports: default

// Module 3499 (hoursToSeconds)
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
  return Math.floor(arg0 * require(3388) /* keys */.secondsInHour);
};
export default exports.default;
