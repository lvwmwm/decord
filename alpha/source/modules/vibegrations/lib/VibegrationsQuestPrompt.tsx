// Module ID: 17066
// Function ID: 17067
// Name: VibegrationsQuestPrompt
// Dependencies: [11743, 7938, 2]
// Exports: dismissQuestPrompt, isQuestPromptDismissed, watchableQuest

// Module 17066 (VibegrationsQuestPrompt)
import QuestsEligibility from "QuestsEligibility" /* 11743 */;
import size from "module_2" /* 2 */;

let c2 = false;
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsQuestPrompt.tsx");

export const watchableQuest = function watchableQuest(quest, arg1) {
  let tmp3 = null;
  let tmp4 = null;
  if (null != quest) {
    if (!obj.getIsEligibleForQuests()) {
      tmp4 = null;
    } else if (tmp) {
      const userStatus2 = quest.userStatus;
      let claimedAt;
      if (userStatus2 != tmp3) {
        claimedAt = userStatus2.claimedAt;
      }
      tmp3 = null;
      if (!tmp11) {
        tmp3 = quest;
      }
      tmp11 = tmp3 != claimedAt;
    } else if (!tmp2) {
      if (!tmp5Result.isQuestExpired(quest)) {
        const userStatus = quest.userStatus;
        let completedAt;
        if (userStatus != tmp3) {
          completedAt = userStatus.completedAt;
        }
      }
      tmp5Result = tmp5(7938);
    }
    obj = QuestsEligibility;
    tmp5 = require;
  }
  return tmp4;
};
export function isQuestPromptDismissed() {
  return c2;
}
export function dismissQuestPrompt() {
  c2 = true;
}
