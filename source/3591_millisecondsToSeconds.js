// Module ID: 3591
// Function ID: 27776
// Name: millisecondsToSeconds
// Dependencies: [3210, 3388]
// Exports: default

// Module 3591 (millisecondsToSeconds)
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
  return Math.floor(arg0 / require(3388) /* keys */.millisecondsInSecond);
};
export default exports.default;
