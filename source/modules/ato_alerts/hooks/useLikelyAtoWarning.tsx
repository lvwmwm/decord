// Module ID: 11367
// Function ID: 11368
// Name: useLikelyAtoWarning
// Dependencies: [10915, 11365, 11366, 10973, 10972, 11364, 2]
// Exports: useLikelyAtoWarning

// Module 11367 (useLikelyAtoWarning)
import set from "set" /* 2 */;
import handleConnectionOpen from "handleConnectionOpen" /* 10915 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 10972 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 10973 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 11365 */;
import useIsMessageRequest from "useIsMessageRequest" /* 11366 */;

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
