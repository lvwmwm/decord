// Module ID: 3577
// Function ID: 3578
// Name: daysToWeeks
// Dependencies: [3400, 3578]
// Exports: default

// Module 3577 (daysToWeeks)
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
  return Math.floor(arg0 / require(3578) /* keys */.daysInWeek);
};
export default exports.default;
