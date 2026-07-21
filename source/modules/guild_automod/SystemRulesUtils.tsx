// Module ID: 16107
// Function ID: 124192
// Name: set
// Dependencies: []
// Exports: isDefaultRuleId

// Module 16107 (set)
const set = new Set([]);
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/guild_automod/SystemRulesUtils.tsx");

export const isDefaultRuleId = function isDefaultRuleId(id) {
  let hasItem = null != id;
  if (hasItem) {
    hasItem = set.has(id);
  }
  return hasItem;
};
