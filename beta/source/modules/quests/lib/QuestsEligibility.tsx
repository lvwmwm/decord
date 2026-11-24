// Module ID: 9950
// Function ID: 9951
// Name: QuestsEligibility
// Dependencies: [1625, 2]
// Exports: getIsEligibleForQuests

// Module 9950 (QuestsEligibility)
import MetaQuestUtils from "MetaQuestUtils" /* 1625 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export function getIsEligibleForQuests() {
  const obj = MetaQuestUtils;
  return !obj.isMetaQuest();
}
