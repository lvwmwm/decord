// Module ID: 12875
// Function ID: 99977
// Name: hasPerformanceForKrispFullband
// Dependencies: [6912, 2]
// Exports: default

// Module 12875 (hasPerformanceForKrispFullband)
const result = require("set").fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = importDefault(6912)();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};
