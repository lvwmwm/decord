// Module ID: 10257
// Function ID: 10258
// Name: useStrangerDangerWarning
// Dependencies: [1903, 9587, 589, 10258, 10259, 10260, 7959, 10261, 2]
// Exports: useStrangerDangerWarning

// Module 10257 (useStrangerDangerWarning)
import mergeGuildAvatar from "mergeGuildAvatar";
import { SafetyWarningTypes } from "handleConnectionOpen";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = function useStrangerDangerWarning(id) {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require(589) /* initialize */;
  const tmp = require;
  const isSpamMessageRequest = require(10258) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(id);
  const obj3 = require(10258) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10259) /* useIsMessageRequest */.useIsMessageRequest(id);
  const obj4 = require(10259) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10260) /* useChannelSafetyWarning */.useChannelSafetyWarning(id, SafetyWarningTypes.STRANGER_DANGER);
  const obj5 = require(10260) /* useChannelSafetyWarning */;
  const userIsTeen = require(7959) /* useUserIsTeen */.useUserIsTeen();
  if (stateFromStores != null) {
    const isStaffResult = stateFromStores.isStaff();
  }
  const obj6 = require(7959) /* useUserIsTeen */;
  if (userIsTeen) {
    if (!isSpamMessageRequest) {
      if (!isMessageRequest) {
        if (tmpResult.useInappropriateConversationWarningsForChannel(id).length <= 0) {
          return channelSafetyWarning;
        }
      }
    }
  }
};
