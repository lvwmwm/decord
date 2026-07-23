// Module ID: 3497
// Function ID: 26921
// Name: hoursToMilliseconds
// Dependencies: [3210, 3388]
// Exports: default

// Module 3497 (hoursToMilliseconds)
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
  return Math.floor(arg0 * require(3388) /* keys */.millisecondsInHour);
};
export default exports.default;
