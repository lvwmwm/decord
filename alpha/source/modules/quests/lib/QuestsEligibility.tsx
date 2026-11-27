// Module ID: 9894
// Function ID: 9895
// Name: QuestsEligibility
// Dependencies: [1626, 2]
// Exports: getIsEligibleForQuests

// Module 9894 (QuestsEligibility)
import MetaQuestUtils from "MetaQuestUtils" /* 1626 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export function getIsEligibleForQuests() {
  const obj = MetaQuestUtils;
  return !obj.isMetaQuest();
}
