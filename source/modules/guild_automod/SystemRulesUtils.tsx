// Module ID: 16115
// Function ID: 124234
// Name: set
// Dependencies: []
// Exports: isDefaultRuleId

// Module 16115 (set)
const set = new Set(["Error"]);
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/guild_automod/SystemRulesUtils.tsx");

export const isDefaultRuleId = function isDefaultRuleId(id) {
  let hasItem = null != id;
  if (hasItem) {
    hasItem = set.has(id);
  }
  return hasItem;
};
