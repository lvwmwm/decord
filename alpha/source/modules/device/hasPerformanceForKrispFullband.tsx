// Module ID: 15321
// Function ID: 15322
// Name: hasPerformanceForKrispFullband
// Dependencies: [5826, 2]
// Exports: default

// Module 15321 (hasPerformanceForKrispFullband)
import getMediaPerformanceClassDefault from "getMediaPerformanceClass" /* 5826 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = getMediaPerformanceClassDefault();
  return null === tmp || tmp >= 31;
};
