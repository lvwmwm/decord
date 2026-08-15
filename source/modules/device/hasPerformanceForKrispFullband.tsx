// Module ID: 13171
// Function ID: 13172
// Name: hasPerformanceForKrispFullband
// Dependencies: [5418, 2]
// Exports: default

// Module 13171 (hasPerformanceForKrispFullband)
const result = require("set").fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = importDefault(5418)();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};
