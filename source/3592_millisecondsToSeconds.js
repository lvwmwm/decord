// Module ID: 3592
// Function ID: 27788
// Name: millisecondsToSeconds
// Dependencies: [3211, 3389]
// Exports: default

// Module 3592 (millisecondsToSeconds)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let closure_2 = tmp3;

export default function millisecondsToSeconds(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3389) /* keys */.millisecondsInSecond);
};
export default exports.default;
