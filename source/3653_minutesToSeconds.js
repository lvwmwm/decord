// Module ID: 3653
// Function ID: 3654
// Name: minutesToSeconds
// Dependencies: [3269, 3447]
// Exports: default

// Module 3653 (minutesToSeconds)
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
  return Math.floor(arg0 * require(3447) /* keys */.secondsInMinute);
};
export default exports.default;
