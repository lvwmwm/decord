// Module ID: 17151
// Function ID: 17152
// Name: useIsNewClassification
// Dependencies: [11, 2]
// Exports: useIsNewClassification

// Module 17151 (useIsNewClassification)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useIsNewClassification.tsx");

export function useIsNewClassification(classification) {
  const obj = SnowflakeUtilsDefault;
  const extractTimestampResult = obj.extractTimestamp(classification.id);
  const date = new Date();
  return abs(extractTimestampResult - date.getTime()) < 86400000;
}
