// Module ID: 9523
// Function ID: 9524
// Name: QuestsEligibility
// Dependencies: [1630, 2]
// Exports: getIsEligibleForQuests

// Module 9523 (QuestsEligibility)
import MetaQuestUtils from "MetaQuestUtils" /* 1630 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  const obj = MetaQuestUtils;
  return !obj.isMetaQuest();
};
