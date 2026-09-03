// Module ID: 17382
// Function ID: 17383
// Name: set
// Dependencies: [2]
// Exports: isDefaultRuleId

// Module 17382 (set)
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
