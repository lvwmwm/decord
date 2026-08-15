// Module ID: 3650
// Function ID: 3651
// Name: daysToWeeks
// Dependencies: [3473, 3651]
// Exports: default

// Module 3650 (daysToWeeks)
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
  return Math.floor(arg0 / require(3651) /* keys */.daysInWeek);
};
export default exports.default;
