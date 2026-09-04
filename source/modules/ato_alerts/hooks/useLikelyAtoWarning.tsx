// Module ID: 11299
// Function ID: 11300
// Name: useLikelyAtoWarning
// Dependencies: [10846, 11297, 11298, 10904, 10903, 11296, 2]
// Exports: useLikelyAtoWarning

// Module 11299 (useLikelyAtoWarning)
import set from "set" /* 2 */;
import handleConnectionOpen from "handleConnectionOpen" /* 10846 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 10903 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 10904 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 11297 */;
import useIsMessageRequest from "useIsMessageRequest" /* 11298 */;

const SafetyWarningTypes = handleConnectionOpen.SafetyWarningTypes;
const result = set.fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = function useLikelyAtoWarning(channelId) {
  const isSpamMessageRequest = useIsSpamMessageRequest.useIsSpamMessageRequest(channelId);
  const obj = useIsSpamMessageRequest;
  const isMessageRequest = useIsMessageRequest.useIsMessageRequest(channelId);
  const obj2 = useIsMessageRequest;
  const channelSafetyWarning = useChannelSafetyWarning.useChannelSafetyWarning(channelId, SafetyWarningTypes.LIKELY_ATO);
  const obj3 = useChannelSafetyWarning;
  const obj4 = useInappropriateConversationWarningsForChannel;
  const tmp4 = useInappropriateConversationWarningsForChannel.useInappropriateConversationWarningsForChannel(channelId).length > 0;
  if (!isSpamMessageRequest) {
    if (!isMessageRequest) {
      if (!tmp4) {
        if (null == obj5.useStrangerDangerWarning(channelId)) {
          return channelSafetyWarning;
        }
      }
    }
  }
};
