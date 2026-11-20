// Module ID: 9927
// Function ID: 9928
// Name: generateHydrationId
// Dependencies: [2]
// Exports: generateHydrationId

// Module 9927 (generateHydrationId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/generateHydrationId.tsx");

export function generateHydrationId(startingIndex, endingIndex) {
  return "hydration-" + startingIndex + "-" + endingIndex;
}
