// Module ID: 11783
// Function ID: 11784
// Name: useStrangerDangerWarning
// Dependencies: [1386, 11784, 504, 11785, 11786, 11787, 10192, 11788, 2]
// Exports: useStrangerDangerWarning

// Module 11783 (useStrangerDangerWarning)
import get_initialized from "get initialized" /* 504 */;
import useUserIsTeen from "useUserIsTeen" /* 10192 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 11784 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 11785 */;
import useIsMessageRequest from "useIsMessageRequest" /* 11786 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 11787 */;
import UserStore from "UserStore" /* 1386 */;
import size from "module_2" /* 2 */;

let tmp;
const useInappropriateConversationWarningsForChannel = tmp(11788);
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
