// Module ID: 12948
// Function ID: 12949
// Name: hasPerformanceForKrispFullband
// Dependencies: [5954, 2]
// Exports: default

// Module 12948 (hasPerformanceForKrispFullband)
const result = require("set").fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = importDefault(5954)();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};
