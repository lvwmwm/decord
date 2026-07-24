// Module ID: 13710
// Function ID: 105224
// Name: useIsNewClassification
// Dependencies: [21, 2]
// Exports: useIsNewClassification

// Module 13710 (useIsNewClassification)
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useIsNewClassification.tsx");

export const useIsNewClassification = function useIsNewClassification(classification) {
  const obj = importDefault(21);
  const extractTimestampResult = importDefault(21).extractTimestamp(classification.id);
  return Math.abs(extractTimestampResult - new Date().getTime()) < 86400000;
};
