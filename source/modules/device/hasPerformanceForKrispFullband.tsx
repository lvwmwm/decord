// Module ID: 12931
// Function ID: 100282
// Name: hasPerformanceForKrispFullband
// Dependencies: [5937, 2]
// Exports: default

// Module 12931 (hasPerformanceForKrispFullband)
const result = require("set").fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = importDefault(5937)();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};
