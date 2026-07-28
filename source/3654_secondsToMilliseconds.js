// Module ID: 3654
// Function ID: 27972
// Name: secondsToMilliseconds
// Dependencies: [3245, 3423]
// Exports: default

// Module 3654 (secondsToMilliseconds)
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
  return arg0 * require(3423) /* keys */.millisecondsInSecond;
};
export default exports.default;
