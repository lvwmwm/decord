// Module ID: 11231
// Function ID: 11232
// Name: useStrangerDangerWarning
// Dependencies: [1384, 10784, 504, 11232, 11233, 11234, 8360, 11235, 2]
// Exports: useStrangerDangerWarning

// Module 11231 (useStrangerDangerWarning)
import get_initialized from "get initialized" /* 504 */;
import useUserIsTeen from "useUserIsTeen" /* 8360 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10784 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 11232 */;
import useIsMessageRequest from "useIsMessageRequest" /* 11233 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 11234 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

let tmp;
const useInappropriateConversationWarningsForChannel = tmp(11235);
const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const result = size.fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export function useStrangerDangerWarning(id) {
  let currentUser;
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj3 = useIsSpamMessageRequest;
  const isSpamMessageRequest = obj3.useIsSpamMessageRequest(id);
  const obj4 = useIsMessageRequest;
  const isMessageRequest = obj4.useIsMessageRequest(id);
  const obj5 = useChannelSafetyWarning;
  const channelSafetyWarning = obj5.useChannelSafetyWarning(id, SafetyWarningTypes.STRANGER_DANGER);
  const obj6 = useUserIsTeen;
  const userIsTeen = obj6.useUserIsTeen();
  if (stateFromStores != null) {
    stateFromStores.isStaff();
  }
  const tmpResult = useInappropriateConversationWarningsForChannel;
  if (userIsTeen) {
    if (!isSpamMessageRequest) {
      if (!isMessageRequest) {
        if (tmpResult.useInappropriateConversationWarningsForChannel(id).length <= 0) {
          return channelSafetyWarning;
        }
      }
    }
  }
}
