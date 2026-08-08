// Module ID: 10339
// Function ID: 10340
// Name: useStrangerDangerWarning
// Dependencies: [1903, 9668, 589, 10340, 10341, 10342, 8036, 10343, 2]
// Exports: useStrangerDangerWarning

// Module 10339 (useStrangerDangerWarning)
import mergeGuildAvatar from "mergeGuildAvatar";
import { SafetyWarningTypes } from "handleConnectionOpen";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = function useStrangerDangerWarning(id) {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require(589) /* initialize */;
  const tmp = require;
  const isSpamMessageRequest = require(10340) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(id);
  const obj3 = require(10340) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10341) /* useIsMessageRequest */.useIsMessageRequest(id);
  const obj4 = require(10341) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10342) /* useChannelSafetyWarning */.useChannelSafetyWarning(id, SafetyWarningTypes.STRANGER_DANGER);
  const obj5 = require(10342) /* useChannelSafetyWarning */;
  const userIsTeen = require(8036) /* useUserIsTeen */.useUserIsTeen();
  if (stateFromStores != null) {
    const isStaffResult = stateFromStores.isStaff();
  }
  const obj6 = require(8036) /* useUserIsTeen */;
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
