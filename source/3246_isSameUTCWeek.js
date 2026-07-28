// Module ID: 3246
// Function ID: 25942
// Name: isSameUTCWeek
// Dependencies: [3245, 3247]
// Exports: default

// Module 3246 (isSameUTCWeek)
import requiredArgs from "requiredArgs";
import startOfUTCWeek from "startOfUTCWeek";


export default function isSameUTCWeek(defaultResult1, defaultResult1, defaultResult2) {
  requiredArgs.default(2, arguments);
  defaultResult1 = startOfUTCWeek.default(defaultResult1, defaultResult2);
  const time = defaultResult1.getTime();
  return time === startOfUTCWeek.default(defaultResult1, defaultResult2).getTime();
};
export default exports.default;
