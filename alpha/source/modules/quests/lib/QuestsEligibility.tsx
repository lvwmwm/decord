// Module ID: 9628
// Function ID: 9629
// Name: QuestsEligibility
// Dependencies: [1628, 2]
// Exports: getIsEligibleForQuests

// Module 9628 (QuestsEligibility)
import MetaQuestUtils from "MetaQuestUtils" /* 1628 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export function getIsEligibleForQuests() {
  const obj = MetaQuestUtils;
  return !obj.isMetaQuest();
}
