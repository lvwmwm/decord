// Module ID: 10912
// Function ID: 10913
// Name: QuestsEligibility
// Dependencies: [1615, 2]
// Exports: getIsEligibleForQuests

// Module 10912 (QuestsEligibility)
import MetaQuestUtils from "MetaQuestUtils" /* 1615 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  const obj = MetaQuestUtils;
  return !obj.isMetaQuest();
};
