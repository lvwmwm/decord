// Module ID: 10226
// Function ID: 10227
// Name: useStrangerDangerWarning
// Dependencies: [1874, 9558, 589, 10227, 10228, 10229, 7818, 10230, 2]
// Exports: useStrangerDangerWarning

// Module 10226 (useStrangerDangerWarning)
import mergeGuildAvatar from "mergeGuildAvatar";
import { SafetyWarningTypes } from "handleConnectionOpen";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = function useStrangerDangerWarning(id) {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require(589) /* initialize */;
  const tmp = require;
  const isSpamMessageRequest = require(10227) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(id);
  const obj3 = require(10227) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10228) /* useIsMessageRequest */.useIsMessageRequest(id);
  const obj4 = require(10228) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10229) /* useChannelSafetyWarning */.useChannelSafetyWarning(id, SafetyWarningTypes.STRANGER_DANGER);
  const obj5 = require(10229) /* useChannelSafetyWarning */;
  const userIsTeen = require(7818) /* useUserIsTeen */.useUserIsTeen();
  if (stateFromStores != null) {
    const isStaffResult = stateFromStores.isStaff();
  }
  const obj6 = require(7818) /* useUserIsTeen */;
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
