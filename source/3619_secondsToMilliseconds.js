// Module ID: 3619
// Function ID: 27858
// Name: secondsToMilliseconds
// Dependencies: [3210, 3388]
// Exports: default

// Module 3619 (secondsToMilliseconds)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let closure_2 = tmp3;

export default function secondsToMilliseconds(arg0) {
  tmp3.default(1, arguments);
  return arg0 * require(3388) /* keys */.millisecondsInSecond;
};
export default exports.default;
