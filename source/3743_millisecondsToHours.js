// Module ID: 3743
// Function ID: 3744
// Name: millisecondsToHours
// Dependencies: [3364, 3542]
// Exports: default

// Module 3743 (millisecondsToHours)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function millisecondsToHours(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3542) /* keys */.millisecondsInHour);
};
export default exports.default;
