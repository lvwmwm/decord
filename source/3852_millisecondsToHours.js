// Module ID: 3852
// Function ID: 3853
// Name: millisecondsToHours
// Dependencies: [3473, 3651]
// Exports: default

// Module 3852 (millisecondsToHours)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function millisecondsToHours(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3651) /* keys */.millisecondsInHour);
};
export default exports.default;
