// Module ID: 10152
// Function ID: 10153
// Name: generateHydrationId
// Dependencies: [2]
// Exports: generateHydrationId

// Module 10152 (generateHydrationId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/generateHydrationId.tsx");

export function generateHydrationId(startingIndex, endingIndex) {
  return "hydration-" + startingIndex + "-" + endingIndex;
}
