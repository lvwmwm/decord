// Module ID: 3765
// Function ID: 3766
// Name: minutesToSeconds
// Dependencies: [3381, 3559]
// Exports: default

// Module 3765 (minutesToSeconds)
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
  return Math.floor(arg0 * require(3559) /* keys */.secondsInMinute);
};
export default exports.default;
