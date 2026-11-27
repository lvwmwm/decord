// Module ID: 8928
// Function ID: 8929
// Name: generateHydrationId
// Dependencies: [2]
// Exports: generateHydrationId

// Module 8928 (generateHydrationId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/generateHydrationId.tsx");

export function generateHydrationId(startingIndex, endingIndex) {
  return "hydration-" + startingIndex + "-" + endingIndex;
}
