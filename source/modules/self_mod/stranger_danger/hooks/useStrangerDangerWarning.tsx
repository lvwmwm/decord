// Module ID: 10431
// Function ID: 10432
// Name: useStrangerDangerWarning
// Dependencies: [1874, 9099, 589, 10432, 10433, 10434, 7708, 10133, 2]
// Exports: useStrangerDangerWarning

// Module 10431 (useStrangerDangerWarning)
import mergeGuildAvatar from "mergeGuildAvatar";
import { SafetyWarningTypes } from "handleConnectionOpen";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = function useStrangerDangerWarning(id) {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require(589) /* initialize */;
  const tmp = require;
  const isSpamMessageRequest = require(10432) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(id);
  const obj3 = require(10432) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10433) /* useIsMessageRequest */.useIsMessageRequest(id);
  const obj4 = require(10433) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10434) /* useChannelSafetyWarning */.useChannelSafetyWarning(id, SafetyWarningTypes.STRANGER_DANGER);
  const obj5 = require(10434) /* useChannelSafetyWarning */;
  const userIsTeen = require(7708) /* useUserIsTeen */.useUserIsTeen();
  if (stateFromStores != null) {
    const isStaffResult = stateFromStores.isStaff();
  }
  const obj6 = require(7708) /* useUserIsTeen */;
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
