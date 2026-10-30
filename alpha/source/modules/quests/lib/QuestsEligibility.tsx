// Module ID: 9653
// Function ID: 9654
// Name: QuestsEligibility
// Dependencies: [1623, 2]
// Exports: getIsEligibleForQuests

// Module 9653 (QuestsEligibility)
import MetaQuestUtils from "MetaQuestUtils" /* 1623 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export function getIsEligibleForQuests() {
  const obj = MetaQuestUtils;
  return !obj.isMetaQuest();
}
