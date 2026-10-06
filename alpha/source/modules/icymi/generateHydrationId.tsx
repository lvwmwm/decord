// Module ID: 8044
// Function ID: 8045
// Name: generateHydrationId
// Dependencies: [2]
// Exports: generateHydrationId

// Module 8044 (generateHydrationId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/generateHydrationId.tsx");

export const generateHydrationId = function generateHydrationId(startingIndex, endingIndex) {
  return "hydration-" + startingIndex + "-" + endingIndex;
};
