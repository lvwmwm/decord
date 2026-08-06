// Module ID: 3747
// Function ID: 3748
// Name: minutesToMilliseconds
// Dependencies: [3364, 3542]
// Exports: default

// Module 3747 (minutesToMilliseconds)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function minutesToMilliseconds(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(3542) /* keys */.millisecondsInMinute);
};
export default exports.default;
