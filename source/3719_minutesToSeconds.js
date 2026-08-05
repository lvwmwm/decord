// Module ID: 3719
// Function ID: 3720
// Name: minutesToSeconds
// Dependencies: [3335, 3513]
// Exports: default

// Module 3719 (minutesToSeconds)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function minutesToSeconds(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(3513) /* keys */.secondsInMinute);
};
export default exports.default;
