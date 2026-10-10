// Module ID: 8476
// Function ID: 8477
// Name: generateHydrationId
// Dependencies: [2]
// Exports: generateHydrationId

// Module 8476 (generateHydrationId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/generateHydrationId.tsx");

export const generateHydrationId = function generateHydrationId(startingIndex, endingIndex) {
  return "hydration-" + startingIndex + "-" + endingIndex;
};
