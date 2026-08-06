// Module ID: 3748
// Function ID: 3749
// Name: minutesToSeconds
// Dependencies: [3364, 3542]
// Exports: default

// Module 3748 (minutesToSeconds)
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
  return Math.floor(arg0 * require(3542) /* keys */.secondsInMinute);
};
export default exports.default;
