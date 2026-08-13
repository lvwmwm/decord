// Module ID: 13231
// Function ID: 13232
// Name: hasPerformanceForKrispFullband
// Dependencies: [7177, 2]
// Exports: default

// Module 13231 (hasPerformanceForKrispFullband)
const result = require("set").fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = importDefault(7177)();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};
