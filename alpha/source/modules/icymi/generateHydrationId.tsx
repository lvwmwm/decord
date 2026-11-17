// Module ID: 10664
// Function ID: 10665
// Name: generateHydrationId
// Dependencies: [2]
// Exports: generateHydrationId

// Module 10664 (generateHydrationId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/generateHydrationId.tsx");

export function generateHydrationId(startingIndex, endingIndex) {
  return "hydration-" + startingIndex + "-" + endingIndex;
}
