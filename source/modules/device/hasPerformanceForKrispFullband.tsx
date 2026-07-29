// Module ID: 12953
// Function ID: 12954
// Name: hasPerformanceForKrispFullband
// Dependencies: [5956, 2]
// Exports: default

// Module 12953 (hasPerformanceForKrispFullband)
const result = require("set").fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = importDefault(5956)();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};
