// Module ID: 8477
// Function ID: 8478
// Name: generateHydrationId
// Dependencies: [2]
// Exports: generateHydrationId

// Module 8477 (generateHydrationId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/generateHydrationId.tsx");

export const generateHydrationId = function generateHydrationId(startingIndex, endingIndex) {
  return "hydration-" + startingIndex + "-" + endingIndex;
};
