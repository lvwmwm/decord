// Module ID: 3849
// Function ID: 3850
// Name: secondsToHours
// Dependencies: [3441, 3619]
// Exports: default

// Module 3849 (secondsToHours)
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
  return Math.floor(arg0 / require(3619) /* keys */.secondsInHour);
};
export default exports.default;
