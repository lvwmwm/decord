// Module ID: 3808
// Function ID: 3809
// Name: secondsToHours
// Dependencies: [3400, 3578]
// Exports: default

// Module 3808 (secondsToHours)
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
  return Math.floor(arg0 / require(3578) /* keys */.secondsInHour);
};
export default exports.default;
