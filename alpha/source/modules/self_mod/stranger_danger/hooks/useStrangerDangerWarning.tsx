// Module ID: 10362
// Function ID: 10363
// Name: useStrangerDangerWarning
// Dependencies: [1389, 10266, 558, 576, 504, 10363, 10364, 10365, 7710, 10366, 2]

// Module 10362 (useStrangerDangerWarning)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import useUserIsTeen from "useUserIsTeen" /* 7710 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10266 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 10363 */;
import useIsMessageRequest from "useIsMessageRequest" /* 10364 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 10365 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 10366 */;
import UserStore from "UserStore" /* 1389 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useStrangerDangerWarning(arg0) {
  let currentUser;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function o() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const tmpResult6 = useIsSpamMessageRequest;
  const isSpamMessageRequest = tmpResult6.useIsSpamMessageRequest(arg0);
  const tmpResult7 = useIsMessageRequest;
  const isMessageRequest = tmpResult7.useIsMessageRequest(arg0);
  const tmpResult8 = useChannelSafetyWarning;
  const channelSafetyWarning = tmpResult8.useChannelSafetyWarning(arg0, SafetyWarningTypes.STRANGER_DANGER);
  const tmpResult9 = useUserIsTeen;
  const userIsTeen = tmpResult9.useUserIsTeen();
  if (stateFromStores != null) {
    stateFromStores.isStaff();
  }
  const tmpResult10 = useInappropriateConversationWarningsForChannel;
  if (userIsTeen) {
    if (!isSpamMessageRequest) {
      if (!isMessageRequest) {
        if (tmpResult10.useInappropriateConversationWarningsForChannel(arg0).length <= 0) {
          return channelSafetyWarning;
        }
      }
    }
  }
}) : (function useStrangerDangerWarning(arg0) {
  let currentUser;
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj3 = useIsSpamMessageRequest;
  const isSpamMessageRequest = obj3.useIsSpamMessageRequest(arg0);
  const obj4 = useIsMessageRequest;
  const isMessageRequest = obj4.useIsMessageRequest(arg0);
  const obj5 = useChannelSafetyWarning;
  const channelSafetyWarning = obj5.useChannelSafetyWarning(arg0, SafetyWarningTypes.STRANGER_DANGER);
  const obj6 = useUserIsTeen;
  const userIsTeen = obj6.useUserIsTeen();
  if (stateFromStores != null) {
    stateFromStores.isStaff();
  }
  const tmpResult = useInappropriateConversationWarningsForChannel;
  if (userIsTeen) {
    if (!isSpamMessageRequest) {
      if (!isMessageRequest) {
        if (tmpResult.useInappropriateConversationWarningsForChannel(arg0).length <= 0) {
          return channelSafetyWarning;
        }
      }
    }
  }
});
const result = size.fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = tmp2;
