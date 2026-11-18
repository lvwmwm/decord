// Module ID: 9945
// Function ID: 9946
// Name: generateHydrationId
// Dependencies: [2]
// Exports: generateHydrationId

// Module 9945 (generateHydrationId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/generateHydrationId.tsx");

export function generateHydrationId(startingIndex, endingIndex) {
  return "hydration-" + startingIndex + "-" + endingIndex;
}
