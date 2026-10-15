// Module ID: 15029
// Function ID: 15030
// Name: hasPerformanceForKrispFullband
// Dependencies: [5293, 2]
// Exports: default

// Module 15029 (hasPerformanceForKrispFullband)
import getMediaPerformanceClassDefault from "getMediaPerformanceClass" /* 5293 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = getMediaPerformanceClassDefault();
  return null === tmp || tmp >= 31;
};
