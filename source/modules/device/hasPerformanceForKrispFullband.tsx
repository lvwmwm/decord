// Module ID: 13173
// Function ID: 13174
// Name: hasPerformanceForKrispFullband
// Dependencies: [7132, 2]
// Exports: default

// Module 13173 (hasPerformanceForKrispFullband)
const result = require("set").fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = importDefault(7132)();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};
