// Module ID: 9165
// Function ID: 9166
// Name: QuestsEligibility
// Dependencies: [1628, 2]
// Exports: getIsEligibleForQuests

// Module 9165 (QuestsEligibility)
import MetaQuestUtils from "MetaQuestUtils" /* 1628 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  const obj = MetaQuestUtils;
  return !obj.isMetaQuest();
};
