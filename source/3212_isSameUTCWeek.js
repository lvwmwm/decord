// Module ID: 3212
// Function ID: 25840
// Name: isSameUTCWeek
// Dependencies: [3211, 3213]
// Exports: default

// Module 3212 (isSameUTCWeek)
import requiredArgs from "requiredArgs";
import startOfUTCWeek from "startOfUTCWeek";


export default function isSameUTCWeek(defaultResult1, defaultResult1, defaultResult2) {
  requiredArgs.default(2, arguments);
  defaultResult1 = startOfUTCWeek.default(defaultResult1, defaultResult2);
  const time = defaultResult1.getTime();
  return time === startOfUTCWeek.default(defaultResult1, defaultResult2).getTime();
};
export default exports.default;
