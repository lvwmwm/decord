// Module ID: 8559
// Function ID: 8560
// Name: MarkupEligibilityUtils
// Dependencies: [11, 2]
// Exports: isMessageNewerThanImprovedMarkdownEpoch

// Module 8559 (MarkupEligibilityUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/MarkupEligibilityUtils.tsx");

export function isMessageNewerThanImprovedMarkdownEpoch(arg0) {
  const obj = SnowflakeUtilsDefault;
  return arg0 >= obj.extractTimestamp("1088216706570268682");
}
