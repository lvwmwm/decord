// Module ID: 9805
// Function ID: 9806
// Name: QuestsEligibility
// Dependencies: [1624, 2]
// Exports: getIsEligibleForQuests

// Module 9805 (QuestsEligibility)
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export function getIsEligibleForQuests() {
  const obj = MetaQuestUtils;
  return !obj.isMetaQuest();
}
