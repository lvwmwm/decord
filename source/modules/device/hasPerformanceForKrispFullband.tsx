// Module ID: 13775
// Function ID: 13776
// Name: hasPerformanceForKrispFullband
// Dependencies: [7424, 2]
// Exports: default

// Module 13775 (hasPerformanceForKrispFullband)
import set from "set" /* 2 */;
import getMediaPerformanceClassDefault from "getMediaPerformanceClass" /* 7424 */;

const result = set.fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = getMediaPerformanceClassDefault();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};
