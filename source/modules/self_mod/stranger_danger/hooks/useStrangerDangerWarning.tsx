// Module ID: 10312
// Function ID: 10313
// Name: useStrangerDangerWarning
// Dependencies: [1922, 9728, 589, 10313, 10314, 10315, 8102, 10316, 2]
// Exports: useStrangerDangerWarning

// Module 10312 (useStrangerDangerWarning)
import mergeGuildAvatar from "mergeGuildAvatar";
import { SafetyWarningTypes } from "handleConnectionOpen";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = function useStrangerDangerWarning(id) {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require(589) /* initialize */;
  const tmp = require;
  const isSpamMessageRequest = require(10313) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(id);
  const obj3 = require(10313) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10314) /* useIsMessageRequest */.useIsMessageRequest(id);
  const obj4 = require(10314) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10315) /* useChannelSafetyWarning */.useChannelSafetyWarning(id, SafetyWarningTypes.STRANGER_DANGER);
  const obj5 = require(10315) /* useChannelSafetyWarning */;
  const userIsTeen = require(8102) /* useUserIsTeen */.useUserIsTeen();
  if (stateFromStores != null) {
    const isStaffResult = stateFromStores.isStaff();
  }
  const obj6 = require(8102) /* useUserIsTeen */;
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
