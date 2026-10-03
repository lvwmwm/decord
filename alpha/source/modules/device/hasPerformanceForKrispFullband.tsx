// Module ID: 13877
// Function ID: 13878
// Name: hasPerformanceForKrispFullband
// Dependencies: [7156, 2]
// Exports: default

// Module 13877 (hasPerformanceForKrispFullband)
import getMediaPerformanceClassDefault from "getMediaPerformanceClass" /* 7156 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = getMediaPerformanceClassDefault();
  return null === tmp || tmp >= 31;
};
