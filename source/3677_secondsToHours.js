// Module ID: 3677
// Function ID: 3678
// Name: secondsToHours
// Dependencies: [3269, 3447]
// Exports: default

// Module 3677 (secondsToHours)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function secondsToHours(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3447) /* keys */.secondsInHour);
};
export default exports.default;
