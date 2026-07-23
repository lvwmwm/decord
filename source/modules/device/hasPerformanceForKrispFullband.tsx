// Module ID: 12824
// Function ID: 99656
// Name: hasPerformanceForKrispFullband
// Dependencies: [6913, 2]
// Exports: default

// Module 12824 (hasPerformanceForKrispFullband)
const result = require("set").fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = importDefault(6913)();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};
