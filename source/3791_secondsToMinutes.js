// Module ID: 3791
// Function ID: 3792
// Name: secondsToMinutes
// Dependencies: [3381, 3559]
// Exports: default

// Module 3791 (secondsToMinutes)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function secondsToMinutes(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3559) /* keys */.secondsInMinute);
};
export default exports.default;
