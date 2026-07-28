// Module ID: 3534
// Function ID: 27040
// Name: hoursToSeconds
// Dependencies: [3245, 3423]
// Exports: default

// Module 3534 (hoursToSeconds)
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
  return Math.floor(arg0 * require(3423) /* keys */.secondsInHour);
};
export default exports.default;
