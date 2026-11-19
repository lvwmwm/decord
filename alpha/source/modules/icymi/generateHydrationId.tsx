// Module ID: 9924
// Function ID: 9925
// Name: generateHydrationId
// Dependencies: [2]
// Exports: generateHydrationId

// Module 9924 (generateHydrationId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/generateHydrationId.tsx");

export function generateHydrationId(startingIndex, endingIndex) {
  return "hydration-" + startingIndex + "-" + endingIndex;
}
