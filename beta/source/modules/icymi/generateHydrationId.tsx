// Module ID: 8926
// Function ID: 8927
// Name: generateHydrationId
// Dependencies: [2]
// Exports: generateHydrationId

// Module 8926 (generateHydrationId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/generateHydrationId.tsx");

export function generateHydrationId(startingIndex, endingIndex) {
  return "hydration-" + startingIndex + "-" + endingIndex;
}
