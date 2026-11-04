// Module ID: 9673
// Function ID: 9674
// Name: QuestsEligibility
// Dependencies: [1622, 2]
// Exports: getIsEligibleForQuests

// Module 9673 (QuestsEligibility)
import MetaQuestUtils from "MetaQuestUtils" /* 1622 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export function getIsEligibleForQuests() {
  const obj = MetaQuestUtils;
  return !obj.isMetaQuest();
}
