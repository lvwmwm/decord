// Module ID: 3745
// Function ID: 3746
// Name: millisecondsToSeconds
// Dependencies: [3364, 3542]
// Exports: default

// Module 3745 (millisecondsToSeconds)
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
  return Math.floor(arg0 / require(3542) /* keys */.millisecondsInSecond);
};
export default exports.default;
