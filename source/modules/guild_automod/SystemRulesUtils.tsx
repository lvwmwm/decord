// Module ID: 16092
// Function ID: 124100
// Name: set
// Dependencies: []
// Exports: isDefaultRuleId

// Module 16092 (set)
const set = new Set([false]);
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/guild_automod/SystemRulesUtils.tsx");

export const isDefaultRuleId = function isDefaultRuleId(id) {
  let hasItem = null != id;
  if (hasItem) {
    hasItem = set.has(id);
  }
  return hasItem;
};
