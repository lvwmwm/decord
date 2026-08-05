// Module ID: 13041
// Function ID: 13042
// Name: hasPerformanceForKrispFullband
// Dependencies: [7025, 2]
// Exports: default

// Module 13041 (hasPerformanceForKrispFullband)
const result = require("set").fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = importDefault(7025)();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};
