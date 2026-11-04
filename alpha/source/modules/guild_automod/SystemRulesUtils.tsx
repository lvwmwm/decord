// Module ID: 19953
// Function ID: 19954
// Name: SystemRulesUtils
// Dependencies: [2]
// Exports: isDefaultRuleId

// Module 19953 (SystemRulesUtils)
import size from "module_2" /* 2 */;

const set = new Set(["1030554520465440818"]);
const result = size.fileFinishedImporting("modules/guild_automod/SystemRulesUtils.tsx");

export function isDefaultRuleId(id) {
  const hasItem = null != id && set.has(id);
  return hasItem;
}
