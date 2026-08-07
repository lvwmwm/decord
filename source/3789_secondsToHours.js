// Module ID: 3789
// Function ID: 3790
// Name: secondsToHours
// Dependencies: [3381, 3559]
// Exports: default

// Module 3789 (secondsToHours)
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
  return Math.floor(arg0 / require(3559) /* keys */.secondsInHour);
};
export default exports.default;
