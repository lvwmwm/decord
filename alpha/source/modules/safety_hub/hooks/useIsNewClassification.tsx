// Module ID: 15347
// Function ID: 15348
// Name: useIsNewClassification
// Dependencies: [11, 2]
// Exports: useIsNewClassification

// Module 15347 (useIsNewClassification)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useIsNewClassification.tsx");

export const useIsNewClassification = function useIsNewClassification(classification) {
  const obj = SnowflakeUtilsDefault;
  const extractTimestampResult = obj.extractTimestamp(classification.id);
  const date = new Date();
  return abs(extractTimestampResult - date.getTime()) < 86400000;
};
