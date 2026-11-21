// Module ID: 15358
// Function ID: 15359
// Name: hasPerformanceForKrispFullband
// Dependencies: [5783, 2]
// Exports: default

// Module 15358 (hasPerformanceForKrispFullband)
import getMediaPerformanceClassDefault from "getMediaPerformanceClass" /* 5783 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = getMediaPerformanceClassDefault();
  return null === tmp || tmp >= 31;
};
