// Module ID: 10901
// Function ID: 10902
// Name: useLikelyAtoWarning
// Dependencies: [10663, 558, 10893, 10894, 10895, 10896, 10892, 2]

// Module 10901 (useLikelyAtoWarning)
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10663 */;
import useStrangerDangerWarning from "useStrangerDangerWarning" /* 10892 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 10893 */;
import useIsMessageRequest from "useIsMessageRequest" /* 10894 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 10895 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 10896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useLikelyAtoWarning(arg0) {
  const obj = useIsSpamMessageRequest;
  const isSpamMessageRequest = obj.useIsSpamMessageRequest(arg0);
  const obj2 = useIsMessageRequest;
  const isMessageRequest = obj2.useIsMessageRequest(arg0);
  const obj3 = useChannelSafetyWarning;
  const channelSafetyWarning = obj3.useChannelSafetyWarning(arg0, SafetyWarningTypes.LIKELY_ATO);
  const obj4 = useInappropriateConversationWarningsForChannel;
  const tmp4 = obj4.useInappropriateConversationWarningsForChannel(arg0).length > 0;
  const obj5 = useStrangerDangerWarning;
  if (!isSpamMessageRequest) {
    if (!isMessageRequest) {
      if (!tmp4) {
        if (null == obj5.useStrangerDangerWarning(arg0)) {
          return channelSafetyWarning;
        }
      }
    }
  }
}) : (function useLikelyAtoWarning(arg0) {
  const obj = useIsSpamMessageRequest;
  const isSpamMessageRequest = obj.useIsSpamMessageRequest(arg0);
  const obj2 = useIsMessageRequest;
  const isMessageRequest = obj2.useIsMessageRequest(arg0);
  const obj3 = useChannelSafetyWarning;
  const channelSafetyWarning = obj3.useChannelSafetyWarning(arg0, SafetyWarningTypes.LIKELY_ATO);
  const obj4 = useInappropriateConversationWarningsForChannel;
  const tmp4 = obj4.useInappropriateConversationWarningsForChannel(arg0).length > 0;
  const obj5 = useStrangerDangerWarning;
  if (!isSpamMessageRequest) {
    if (!isMessageRequest) {
      if (!tmp4) {
        if (null == obj5.useStrangerDangerWarning(arg0)) {
          return channelSafetyWarning;
        }
      }
    }
  }
});
const result = size.fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = tmp2;
