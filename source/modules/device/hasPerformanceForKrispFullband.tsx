// Module ID: 13243
// Function ID: 13244
// Name: hasPerformanceForKrispFullband
// Dependencies: [7199, 2]
// Exports: default

// Module 13243 (hasPerformanceForKrispFullband)
const result = require("set").fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = importDefault(7199)();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};
