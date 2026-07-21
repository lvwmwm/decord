// Module ID: 12703
// Function ID: 97467
// Name: hasPerformanceForKrispFullband
// Dependencies: []
// Exports: default

// Module 12703 (hasPerformanceForKrispFullband)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = importDefault(dependencyMap[0])();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};
