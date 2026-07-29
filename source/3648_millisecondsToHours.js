// Module ID: 3648
// Function ID: 3649
// Name: millisecondsToHours
// Dependencies: [3269, 3447]
// Exports: default

// Module 3648 (millisecondsToHours)
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
  return Math.floor(arg0 / require(3447) /* keys */.millisecondsInHour);
};
export default exports.default;
