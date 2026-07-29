// Module ID: 3650
// Function ID: 3651
// Name: millisecondsToSeconds
// Dependencies: [3269, 3447]
// Exports: default

// Module 3650 (millisecondsToSeconds)
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
  return Math.floor(arg0 / require(3447) /* keys */.millisecondsInSecond);
};
export default exports.default;
