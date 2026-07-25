// Module ID: 12886
// Function ID: 100104
// Name: hasPerformanceForKrispFullband
// Dependencies: [5903, 2]
// Exports: default

// Module 12886 (hasPerformanceForKrispFullband)
const result = require("set").fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = importDefault(5903)();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};
