// Module ID: 13366
// Function ID: 13367
// Name: hasPerformanceForKrispFullband
// Dependencies: [7276, 2]
// Exports: default

// Module 13366 (hasPerformanceForKrispFullband)
import set from "set" /* 2 */;
import getMediaPerformanceClassDefault from "getMediaPerformanceClass" /* 7276 */;

const result = set.fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = getMediaPerformanceClassDefault();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};
