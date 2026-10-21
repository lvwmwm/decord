// Module ID: 8805
// Function ID: 8806
// Name: generateHydrationId
// Dependencies: [2]
// Exports: generateHydrationId

// Module 8805 (generateHydrationId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/generateHydrationId.tsx");

export const generateHydrationId = function generateHydrationId(startingIndex, endingIndex) {
  return "hydration-" + startingIndex + "-" + endingIndex;
};
