// Module ID: 10427
// Function ID: 10428
// Name: useStrangerDangerWarning
// Dependencies: [1874, 9095, 589, 10428, 10429, 10430, 7705, 10129, 2]
// Exports: useStrangerDangerWarning

// Module 10427 (useStrangerDangerWarning)
import mergeGuildAvatar from "mergeGuildAvatar";
import { SafetyWarningTypes } from "handleConnectionOpen";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = function useStrangerDangerWarning(id) {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require(589) /* initialize */;
  const tmp = require;
  const isSpamMessageRequest = require(10428) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(id);
  const obj3 = require(10428) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10429) /* useIsMessageRequest */.useIsMessageRequest(id);
  const obj4 = require(10429) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10430) /* useChannelSafetyWarning */.useChannelSafetyWarning(id, SafetyWarningTypes.STRANGER_DANGER);
  const obj5 = require(10430) /* useChannelSafetyWarning */;
  const userIsTeen = require(7705) /* useUserIsTeen */.useUserIsTeen();
  if (stateFromStores != null) {
    const isStaffResult = stateFromStores.isStaff();
  }
  const obj6 = require(7705) /* useUserIsTeen */;
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
