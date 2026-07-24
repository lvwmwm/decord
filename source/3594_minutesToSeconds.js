// Module ID: 3594
// Function ID: 27783
// Name: minutesToSeconds
// Dependencies: [3210, 3388]
// Exports: default

// Module 3594 (minutesToSeconds)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let closure_2 = tmp3;

export default function minutesToSeconds(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(3388) /* keys */.secondsInMinute);
};
export default exports.default;
