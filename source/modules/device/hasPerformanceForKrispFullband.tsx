// Module ID: 13070
// Function ID: 13071
// Name: hasPerformanceForKrispFullband
// Dependencies: [7051, 2]
// Exports: default

// Module 13070 (hasPerformanceForKrispFullband)
const result = require("set").fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = importDefault(7051)();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};
