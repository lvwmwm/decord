// Module ID: 9830
// Function ID: 9831
// Name: QuestsEligibility
// Dependencies: [1625, 2]
// Exports: getIsEligibleForQuests

// Module 9830 (QuestsEligibility)
import MetaQuestUtils from "MetaQuestUtils" /* 1625 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export function getIsEligibleForQuests() {
  const obj = MetaQuestUtils;
  return !obj.isMetaQuest();
}
