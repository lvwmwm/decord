// Module ID: 10570
// Function ID: 10571
// Name: useStrangerDangerWarning
// Dependencies: [1922, 9921, 589, 10571, 10572, 10573, 8152, 10574, 2]
// Exports: useStrangerDangerWarning

// Module 10570 (useStrangerDangerWarning)
import mergeGuildAvatar from "mergeGuildAvatar";
import { SafetyWarningTypes } from "handleConnectionOpen";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = function useStrangerDangerWarning(id) {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require(589) /* initialize */;
  const tmp = require;
  const isSpamMessageRequest = require(10571) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(id);
  const obj3 = require(10571) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10572) /* useIsMessageRequest */.useIsMessageRequest(id);
  const obj4 = require(10572) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10573) /* useChannelSafetyWarning */.useChannelSafetyWarning(id, SafetyWarningTypes.STRANGER_DANGER);
  const obj5 = require(10573) /* useChannelSafetyWarning */;
  const userIsTeen = require(8152) /* useUserIsTeen */.useUserIsTeen();
  if (stateFromStores != null) {
    const isStaffResult = stateFromStores.isStaff();
  }
  const obj6 = require(8152) /* useUserIsTeen */;
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
