// Module ID: 13485
// Function ID: 13486
// Name: hasPerformanceForKrispFullband
// Dependencies: [7362, 2]
// Exports: default

// Module 13485 (hasPerformanceForKrispFullband)
import set from "set" /* 2 */;
import getMediaPerformanceClassDefault from "getMediaPerformanceClass" /* 7362 */;

const result = set.fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = getMediaPerformanceClassDefault();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};
