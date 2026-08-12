// Module ID: 10386
// Function ID: 10387
// Name: useStrangerDangerWarning
// Dependencies: [1922, 9713, 589, 10387, 10388, 10389, 8077, 10390, 2]
// Exports: useStrangerDangerWarning

// Module 10386 (useStrangerDangerWarning)
import mergeGuildAvatar from "mergeGuildAvatar";
import { SafetyWarningTypes } from "handleConnectionOpen";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = function useStrangerDangerWarning(id) {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require(589) /* initialize */;
  const tmp = require;
  const isSpamMessageRequest = require(10387) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(id);
  const obj3 = require(10387) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10388) /* useIsMessageRequest */.useIsMessageRequest(id);
  const obj4 = require(10388) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10389) /* useChannelSafetyWarning */.useChannelSafetyWarning(id, SafetyWarningTypes.STRANGER_DANGER);
  const obj5 = require(10389) /* useChannelSafetyWarning */;
  const userIsTeen = require(8077) /* useUserIsTeen */.useUserIsTeen();
  if (stateFromStores != null) {
    const isStaffResult = stateFromStores.isStaff();
  }
  const obj6 = require(8077) /* useUserIsTeen */;
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
