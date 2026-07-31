// Module ID: 12973
// Function ID: 12974
// Name: hasPerformanceForKrispFullband
// Dependencies: [5960, 2]
// Exports: default

// Module 12973 (hasPerformanceForKrispFullband)
const result = require("set").fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = importDefault(5960)();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};
