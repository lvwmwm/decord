// Module ID: 3626
// Function ID: 27891
// Name: millisecondsToSeconds
// Dependencies: [3245, 3423]
// Exports: default

// Module 3626 (millisecondsToSeconds)
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
  return Math.floor(arg0 / require(3423) /* keys */.millisecondsInSecond);
};
export default exports.default;
