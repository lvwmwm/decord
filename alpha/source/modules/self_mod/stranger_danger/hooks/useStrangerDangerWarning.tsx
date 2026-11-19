// Module ID: 11721
// Function ID: 11722
// Name: useStrangerDangerWarning
// Dependencies: [1388, 11722, 504, 11723, 11724, 11725, 10069, 11726, 2]
// Exports: useStrangerDangerWarning

// Module 11721 (useStrangerDangerWarning)
import get_initialized from "get initialized" /* 504 */;
import useUserIsTeen from "useUserIsTeen" /* 10069 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 11722 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 11723 */;
import useIsMessageRequest from "useIsMessageRequest" /* 11724 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 11725 */;
import UserStore from "UserStore" /* 1388 */;
import size from "module_2" /* 2 */;

let tmp;
const useInappropriateConversationWarningsForChannel = tmp(11726);
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
