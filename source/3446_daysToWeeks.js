// Module ID: 3446
// Function ID: 3447
// Name: daysToWeeks
// Dependencies: [3269, 3447]
// Exports: default

// Module 3446 (daysToWeeks)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function daysToWeeks(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3447) /* keys */.daysInWeek);
};
export default exports.default;
