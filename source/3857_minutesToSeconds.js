// Module ID: 3857
// Function ID: 3858
// Name: minutesToSeconds
// Dependencies: [3473, 3651]
// Exports: default

// Module 3857 (minutesToSeconds)
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
  return Math.floor(arg0 * require(3651) /* keys */.secondsInMinute);
};
export default exports.default;
