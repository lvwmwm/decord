// Module ID: 17057
// Function ID: 17058
// Name: VibegrationsQuestPrompt
// Dependencies: [11608, 7940, 2]
// Exports: dismissQuestPrompt, isQuestPromptDismissed, watchableQuest

// Module 17057 (VibegrationsQuestPrompt)
import QuestsEligibility from "QuestsEligibility" /* 11608 */;
import size from "module_2" /* 2 */;

let c2 = false;
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsQuestPrompt.tsx");

export const watchableQuest = function watchableQuest(watchableQuestResult4, arg1) {
  let tmp3 = null;
  let tmp4 = null;
  if (null != watchableQuestResult4) {
    if (!obj.getIsEligibleForQuests()) {
      tmp4 = null;
    } else if (tmp) {
      const userStatus2 = watchableQuestResult4.userStatus;
      let claimedAt;
      if (userStatus2 != tmp3) {
        claimedAt = userStatus2.claimedAt;
      }
      tmp3 = null;
      if (!tmp11) {
        tmp3 = watchableQuestResult4;
      }
      tmp11 = tmp3 != claimedAt;
    } else if (!tmp2) {
      if (!tmp5Result.isQuestExpired(watchableQuestResult4)) {
        const userStatus = watchableQuestResult4.userStatus;
        let completedAt;
        if (userStatus != tmp3) {
          completedAt = userStatus.completedAt;
        }
      }
      tmp5Result = tmp5(7940);
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
