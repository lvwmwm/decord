// Module ID: 16099
// Function ID: 124131
// Name: set
// Dependencies: [284214097]
// Exports: isDefaultRuleId

// Module 16099 (set)
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
