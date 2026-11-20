// Module ID: 11663
// Function ID: 11664
// Name: useStrangerDangerWarning
// Dependencies: [1386, 11664, 504, 11665, 11666, 11667, 10072, 11668, 2]
// Exports: useStrangerDangerWarning

// Module 11663 (useStrangerDangerWarning)
import get_initialized from "get initialized" /* 504 */;
import useUserIsTeen from "useUserIsTeen" /* 10072 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 11664 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 11665 */;
import useIsMessageRequest from "useIsMessageRequest" /* 11666 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 11667 */;
import UserStore from "UserStore" /* 1386 */;
import size from "module_2" /* 2 */;

let tmp;
const useInappropriateConversationWarningsForChannel = tmp(11668);
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
