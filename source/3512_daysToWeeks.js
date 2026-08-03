// Module ID: 3512
// Function ID: 3513
// Name: daysToWeeks
// Dependencies: [3335, 3513]
// Exports: default

// Module 3512 (daysToWeeks)
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
  return Math.floor(arg0 / require(3513) /* keys */.daysInWeek);
};
export default exports.default;
