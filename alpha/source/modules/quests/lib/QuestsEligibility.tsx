// Module ID: 9828
// Function ID: 9829
// Name: QuestsEligibility
// Dependencies: [1627, 2]
// Exports: getIsEligibleForQuests

// Module 9828 (QuestsEligibility)
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export function getIsEligibleForQuests() {
  const obj = MetaQuestUtils;
  return !obj.isMetaQuest();
}
