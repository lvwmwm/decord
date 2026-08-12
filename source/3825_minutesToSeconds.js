// Module ID: 3825
// Function ID: 3826
// Name: minutesToSeconds
// Dependencies: [3441, 3619]
// Exports: default

// Module 3825 (minutesToSeconds)
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
  return Math.floor(arg0 * require(3619) /* keys */.secondsInMinute);
};
export default exports.default;
