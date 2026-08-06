// Module ID: 13078
// Function ID: 13079
// Name: hasPerformanceForKrispFullband
// Dependencies: [7052, 2]
// Exports: default

// Module 13078 (hasPerformanceForKrispFullband)
const result = require("set").fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = importDefault(7052)();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};
