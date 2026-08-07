// Module ID: 10273
// Function ID: 10274
// Name: useStrangerDangerWarning
// Dependencies: [1903, 9603, 589, 10274, 10275, 10276, 7976, 10277, 2]
// Exports: useStrangerDangerWarning

// Module 10273 (useStrangerDangerWarning)
import mergeGuildAvatar from "mergeGuildAvatar";
import { SafetyWarningTypes } from "handleConnectionOpen";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = function useStrangerDangerWarning(id) {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require(589) /* initialize */;
  const tmp = require;
  const isSpamMessageRequest = require(10274) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(id);
  const obj3 = require(10274) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10275) /* useIsMessageRequest */.useIsMessageRequest(id);
  const obj4 = require(10275) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10276) /* useChannelSafetyWarning */.useChannelSafetyWarning(id, SafetyWarningTypes.STRANGER_DANGER);
  const obj5 = require(10276) /* useChannelSafetyWarning */;
  const userIsTeen = require(7976) /* useUserIsTeen */.useUserIsTeen();
  if (stateFromStores != null) {
    const isStaffResult = stateFromStores.isStaff();
  }
  const obj6 = require(7976) /* useUserIsTeen */;
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
