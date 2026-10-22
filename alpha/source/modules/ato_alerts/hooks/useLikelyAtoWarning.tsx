// Module ID: 10909
// Function ID: 10910
// Name: useLikelyAtoWarning
// Dependencies: [10670, 558, 10901, 10902, 10903, 10904, 10900, 2]

// Module 10909 (useLikelyAtoWarning)
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10670 */;
import useStrangerDangerWarning from "useStrangerDangerWarning" /* 10900 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 10901 */;
import useIsMessageRequest from "useIsMessageRequest" /* 10902 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 10903 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 10904 */;
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
