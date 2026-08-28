// Module ID: 10942
// Function ID: 10943
// Name: useLikelyAtoWarning
// Dependencies: [10591, 10940, 10941, 10648, 10647, 10939, 2]
// Exports: useLikelyAtoWarning

// Module 10942 (useLikelyAtoWarning)
import set from "set" /* 2 */;
import handleConnectionOpen from "handleConnectionOpen" /* 10591 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 10647 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 10648 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 10940 */;
import useIsMessageRequest from "useIsMessageRequest" /* 10941 */;

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
