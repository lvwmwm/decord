// Module ID: 9596
// Function ID: 9597
// Name: QuestsEligibility
// Dependencies: [1627, 2]
// Exports: getIsEligibleForQuests

// Module 9596 (QuestsEligibility)
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  const obj = MetaQuestUtils;
  return !obj.isMetaQuest();
};
