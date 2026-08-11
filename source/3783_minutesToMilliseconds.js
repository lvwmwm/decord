// Module ID: 3783
// Function ID: 3784
// Name: minutesToMilliseconds
// Dependencies: [3400, 3578]
// Exports: default

// Module 3783 (minutesToMilliseconds)
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
  return Math.floor(arg0 * require(3578) /* keys */.millisecondsInMinute);
};
export default exports.default;
