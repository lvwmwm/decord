// Module ID: 11608
// Function ID: 11609
// Name: QuestsEligibility
// Dependencies: [1613, 2]
// Exports: getIsEligibleForQuests

// Module 11608 (QuestsEligibility)
import MetaQuestUtils from "MetaQuestUtils" /* 1613 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !MetaQuestUtils.isMetaQuest();
};
