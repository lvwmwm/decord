// Module ID: 11964
// Function ID: 11965
// Name: useStrangerDangerWarning
// Dependencies: [1385, 10833, 504, 11965, 11966, 11967, 11968, 11969, 2]
// Exports: useStrangerDangerWarning

// Module 11964 (useStrangerDangerWarning)
import get_initialized from "get initialized" /* 504 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10833 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 11965 */;
import useIsMessageRequest from "useIsMessageRequest" /* 11966 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 11967 */;
import useUserIsTeen from "useUserIsTeen" /* 11968 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

let tmp;
const useInappropriateConversationWarningsForChannel = tmp(11969);
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
