// Module ID: 3854
// Function ID: 3855
// Name: millisecondsToSeconds
// Dependencies: [3473, 3651]
// Exports: default

// Module 3854 (millisecondsToSeconds)
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
  return Math.floor(arg0 / require(3651) /* keys */.millisecondsInSecond);
};
export default exports.default;
