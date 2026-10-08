// Module ID: 14200
// Function ID: 14201
// Name: hasPerformanceForKrispFullband
// Dependencies: [5231, 2]
// Exports: default

// Module 14200 (hasPerformanceForKrispFullband)
import getMediaPerformanceClassDefault from "getMediaPerformanceClass" /* 5231 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = getMediaPerformanceClassDefault();
  return null === tmp || tmp >= 31;
};
