// Module ID: 3652
// Function ID: 3653
// Name: minutesToMilliseconds
// Dependencies: [3269, 3447]
// Exports: default

// Module 3652 (minutesToMilliseconds)
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
  return Math.floor(arg0 * require(3447) /* keys */.millisecondsInMinute);
};
export default exports.default;
