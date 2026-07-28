// Module ID: 3532
// Function ID: 27036
// Name: hoursToMilliseconds
// Dependencies: [3245, 3423]
// Exports: default

// Module 3532 (hoursToMilliseconds)
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
  return Math.floor(arg0 * require(3423) /* keys */.millisecondsInHour);
};
export default exports.default;
