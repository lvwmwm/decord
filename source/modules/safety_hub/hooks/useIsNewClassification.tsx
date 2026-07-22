// Module ID: 13545
// Function ID: 102744
// Name: useIsNewClassification
// Dependencies: []
// Exports: useIsNewClassification

// Module 13545 (useIsNewClassification)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/safety_hub/hooks/useIsNewClassification.tsx");

export const useIsNewClassification = function useIsNewClassification(classification) {
  const obj = importDefault(dependencyMap[0]);
  const extractTimestampResult = importDefault(dependencyMap[0]).extractTimestamp(classification.id);
  return Math.abs(extractTimestampResult - new Date().getTime()) < 86400000;
};
