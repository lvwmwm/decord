// Module ID: 3450
// Function ID: 3451
// Name: daysToWeeks
// Dependencies: [3273, 3451]
// Exports: default

// Module 3450 (daysToWeeks)
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
  return Math.floor(arg0 / require(3451) /* keys */.daysInWeek);
};
export default exports.default;
