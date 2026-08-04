// Module ID: 3749
// Function ID: 3750
// Name: minutesToSeconds
// Dependencies: [3365, 3543]
// Exports: default

// Module 3749 (minutesToSeconds)
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
  return Math.floor(arg0 * require(3543) /* keys */.secondsInMinute);
};
export default exports.default;
