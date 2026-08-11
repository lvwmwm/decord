// Module ID: 3784
// Function ID: 3785
// Name: minutesToSeconds
// Dependencies: [3400, 3578]
// Exports: default

// Module 3784 (minutesToSeconds)
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
  return Math.floor(arg0 * require(3578) /* keys */.secondsInMinute);
};
export default exports.default;
