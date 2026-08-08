// Module ID: 13162
// Function ID: 13163
// Name: hasPerformanceForKrispFullband
// Dependencies: [7131, 2]
// Exports: default

// Module 13162 (hasPerformanceForKrispFullband)
const result = require("set").fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = importDefault(7131)();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};
