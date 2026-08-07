// Module ID: 13092
// Function ID: 13093
// Name: hasPerformanceForKrispFullband
// Dependencies: [7071, 2]
// Exports: default

// Module 13092 (hasPerformanceForKrispFullband)
const result = require("set").fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = importDefault(7071)();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};
