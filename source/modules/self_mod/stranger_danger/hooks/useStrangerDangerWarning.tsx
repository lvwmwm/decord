// Module ID: 11296
// Function ID: 11297
// Name: useStrangerDangerWarning
// Dependencies: [1921, 10846, 586, 11297, 11298, 10904, 8574, 10903, 2]
// Exports: useStrangerDangerWarning

// Module 11296 (useStrangerDangerWarning)
import initialize from "initialize" /* 586 */;
import useUserIsTeen from "useUserIsTeen" /* 8574 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 10904 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 11297 */;
import useIsMessageRequest from "useIsMessageRequest" /* 11298 */;
import closure_2 from "mergeGuildAvatar" /* 1921 */;
import { SafetyWarningTypes } from "handleConnectionOpen" /* 10846 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = function useStrangerDangerWarning(id) {
  const items = [closure_2];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = initialize;
  const tmp = require;
  const isSpamMessageRequest = useIsSpamMessageRequest.useIsSpamMessageRequest(id);
  const obj3 = useIsSpamMessageRequest;
  const isMessageRequest = useIsMessageRequest.useIsMessageRequest(id);
  const obj4 = useIsMessageRequest;
  const channelSafetyWarning = useChannelSafetyWarning.useChannelSafetyWarning(id, SafetyWarningTypes.STRANGER_DANGER);
  const obj5 = useChannelSafetyWarning;
  const userIsTeen = useUserIsTeen.useUserIsTeen();
  if (stateFromStores != null) {
    const isStaffResult = stateFromStores.isStaff();
  }
  const obj6 = useUserIsTeen;
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
