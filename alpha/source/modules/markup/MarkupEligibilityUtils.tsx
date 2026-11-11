// Module ID: 9277
// Function ID: 9278
// Name: MarkupEligibilityUtils
// Dependencies: [11, 2]
// Exports: isMessageNewerThanImprovedMarkdownEpoch

// Module 9277 (MarkupEligibilityUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/MarkupEligibilityUtils.tsx");

export function isMessageNewerThanImprovedMarkdownEpoch(arg0) {
  const obj = SnowflakeUtilsDefault;
  return arg0 >= obj.extractTimestamp("1088216706570268682");
}
