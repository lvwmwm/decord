// Module ID: 13069
// Function ID: 13070
// Name: hasPerformanceForKrispFullband
// Dependencies: [7051, 2]
// Exports: default

// Module 13069 (hasPerformanceForKrispFullband)
const result = require("set").fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = importDefault(7051)();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};
