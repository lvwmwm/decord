// Module ID: 7988
// Function ID: 7989
// Name: generateHydrationId
// Dependencies: [2]
// Exports: generateHydrationId

// Module 7988 (generateHydrationId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/generateHydrationId.tsx");

export const generateHydrationId = function generateHydrationId(startingIndex, endingIndex) {
  return "hydration-" + startingIndex + "-" + endingIndex;
};
