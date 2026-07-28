// Module ID: 3624
// Function ID: 27887
// Name: millisecondsToHours
// Dependencies: [3245, 3423]
// Exports: default

// Module 3624 (millisecondsToHours)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let closure_2 = tmp3;

export default function millisecondsToHours(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3423) /* keys */.millisecondsInHour);
};
export default exports.default;
