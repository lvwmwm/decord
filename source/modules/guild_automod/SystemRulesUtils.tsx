// Module ID: 17362
// Function ID: 17363
// Name: set
// Dependencies: [2]
// Exports: isDefaultRuleId

// Module 17362 (set)
import set from "set" /* 2 */;

let set = new Set(["1030554520465440818"]);
const result = set.fileFinishedImporting("modules/guild_automod/SystemRulesUtils.tsx");

export const isDefaultRuleId = function isDefaultRuleId(id) {
  let hasItem = null != id;
  if (hasItem) {
    hasItem = set.has(id);
  }
  return hasItem;
};
