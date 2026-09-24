// Module ID: 10405
// Function ID: 10406
// Name: useLikelyAtoWarning
// Dependencies: [10396, 558, 10397, 10398, 10399, 10400, 10395, 2]

// Module 10405 (useLikelyAtoWarning)
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10396 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 10397 */;
import useIsMessageRequest from "useIsMessageRequest" /* 10398 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 10399 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 10400 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const result = size.fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const isSpamMessageRequest = useIsSpamMessageRequest.useIsSpamMessageRequest(arg0);
  const isMessageRequest = useIsMessageRequest.useIsMessageRequest(arg0);
  const channelSafetyWarning = useChannelSafetyWarning.useChannelSafetyWarning(arg0, SafetyWarningTypes.LIKELY_ATO);
  const tmp4 = useInappropriateConversationWarningsForChannel.useInappropriateConversationWarningsForChannel(arg0).length > 0;
  if (!isSpamMessageRequest) {
    if (!isMessageRequest) {
      if (!tmp4) {
        if (null == obj5.useStrangerDangerWarning(arg0)) {
          return channelSafetyWarning;
        }
      }
    }
  }
}) : ((arg0) => {
  const isSpamMessageRequest = useIsSpamMessageRequest.useIsSpamMessageRequest(arg0);
  const isMessageRequest = useIsMessageRequest.useIsMessageRequest(arg0);
  const channelSafetyWarning = useChannelSafetyWarning.useChannelSafetyWarning(arg0, SafetyWarningTypes.LIKELY_ATO);
  const tmp4 = useInappropriateConversationWarningsForChannel.useInappropriateConversationWarningsForChannel(arg0).length > 0;
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
