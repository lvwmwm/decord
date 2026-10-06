// Module ID: 10671
// Function ID: 10672
// Name: QuestsEligibility
// Dependencies: [1616, 2]
// Exports: getIsEligibleForQuests

// Module 10671 (QuestsEligibility)
import MetaQuestUtils from "MetaQuestUtils" /* 1616 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  const obj = MetaQuestUtils;
  return !obj.isMetaQuest();
};
