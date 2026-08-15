// Module ID: 3881
// Function ID: 3882
// Name: secondsToHours
// Dependencies: [3473, 3651]
// Exports: default

// Module 3881 (secondsToHours)
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
  return Math.floor(arg0 / require(3651) /* keys */.secondsInHour);
};
export default exports.default;
