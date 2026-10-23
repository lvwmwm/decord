// Module ID: 9564
// Function ID: 9565
// Name: QuestsEligibility
// Dependencies: [1630, 2]
// Exports: getIsEligibleForQuests

// Module 9564 (QuestsEligibility)
import MetaQuestUtils from "MetaQuestUtils" /* 1630 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  const obj = MetaQuestUtils;
  return !obj.isMetaQuest();
};
