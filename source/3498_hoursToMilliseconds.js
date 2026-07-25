// Module ID: 3498
// Function ID: 26933
// Name: hoursToMilliseconds
// Dependencies: [3211, 3389]
// Exports: default

// Module 3498 (hoursToMilliseconds)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let closure_2 = tmp3;

export default function hoursToMilliseconds(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(3389) /* keys */.millisecondsInHour);
};
export default exports.default;
