// Module ID: 9009
// Function ID: 9010
// Name: generateHydrationId
// Dependencies: [2]
// Exports: generateHydrationId

// Module 9009 (generateHydrationId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/generateHydrationId.tsx");

export function generateHydrationId(startingIndex, endingIndex) {
  return "hydration-" + startingIndex + "-" + endingIndex;
}
