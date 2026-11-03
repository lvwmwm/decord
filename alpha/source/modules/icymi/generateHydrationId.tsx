// Module ID: 9052
// Function ID: 9053
// Name: generateHydrationId
// Dependencies: [2]
// Exports: generateHydrationId

// Module 9052 (generateHydrationId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/generateHydrationId.tsx");

export function generateHydrationId(startingIndex, endingIndex) {
  return "hydration-" + startingIndex + "-" + endingIndex;
}
