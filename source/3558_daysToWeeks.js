// Module ID: 3558
// Function ID: 3559
// Name: daysToWeeks
// Dependencies: [3381, 3559]
// Exports: default

// Module 3558 (daysToWeeks)
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
  return Math.floor(arg0 / require(3559) /* keys */.daysInWeek);
};
export default exports.default;
