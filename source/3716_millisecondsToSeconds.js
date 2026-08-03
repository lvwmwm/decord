// Module ID: 3716
// Function ID: 3717
// Name: millisecondsToSeconds
// Dependencies: [3335, 3513]
// Exports: default

// Module 3716 (millisecondsToSeconds)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function millisecondsToSeconds(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3513) /* keys */.millisecondsInSecond);
};
export default exports.default;
