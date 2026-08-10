// Module ID: 13164
// Function ID: 13165
// Name: hasPerformanceForKrispFullband
// Dependencies: [7131, 2]
// Exports: default

// Module 13164 (hasPerformanceForKrispFullband)
const result = require("set").fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = importDefault(7131)();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};
