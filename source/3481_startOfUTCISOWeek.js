// Module ID: 3481
// Function ID: 26877
// Name: startOfUTCISOWeek
// Dependencies: [3244, 3245]
// Exports: default

// Module 3481 (startOfUTCISOWeek)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function startOfUTCISOWeek(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const uTCDay = defaultResult1.getUTCDay();
  let num = 0;
  if (uTCDay < 1) {
    num = 7;
  }
  const sum = num + uTCDay;
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - (sum - 1));
  defaultResult1.setUTCHours(0, 0, 0, 0);
  return defaultResult1;
};
export default exports.default;
