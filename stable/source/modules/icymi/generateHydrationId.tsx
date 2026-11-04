// Module ID: 8878
// Function ID: 8879
// Name: generateHydrationId
// Dependencies: [2]
// Exports: generateHydrationId

// Module 8878 (generateHydrationId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/generateHydrationId.tsx");

export const generateHydrationId = function generateHydrationId(startingIndex, endingIndex) {
  return "hydration-" + startingIndex + "-" + endingIndex;
};
