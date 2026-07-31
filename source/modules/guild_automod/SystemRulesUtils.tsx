// Module ID: 16399
// Function ID: 16400
// Name: set
// Dependencies: [2]
// Exports: isDefaultRuleId

// Module 16399 (set)
import set from "set";

let set = new Set(["1030554520465440818"]);
const result = set.fileFinishedImporting("modules/guild_automod/SystemRulesUtils.tsx");

export const isDefaultRuleId = function isDefaultRuleId(id) {
  let hasItem = null != id;
  if (hasItem) {
    hasItem = set.has(id);
  }
  return hasItem;
};
