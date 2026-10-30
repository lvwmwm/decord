// Module ID: 11240
// Function ID: 11241
// Name: useLikelyAtoWarning
// Dependencies: [10784, 11232, 11233, 11234, 11235, 11231, 2]
// Exports: useLikelyAtoWarning

// Module 11240 (useLikelyAtoWarning)
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10784 */;
import useStrangerDangerWarning from "useStrangerDangerWarning" /* 11231 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 11232 */;
import useIsMessageRequest from "useIsMessageRequest" /* 11233 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 11234 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 11235 */;
import size from "module_2" /* 2 */;

const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const result = size.fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export function useLikelyAtoWarning(channelId) {
  const obj = useIsSpamMessageRequest;
  const isSpamMessageRequest = obj.useIsSpamMessageRequest(channelId);
  const obj2 = useIsMessageRequest;
  const isMessageRequest = obj2.useIsMessageRequest(channelId);
  const obj3 = useChannelSafetyWarning;
  const channelSafetyWarning = obj3.useChannelSafetyWarning(channelId, SafetyWarningTypes.LIKELY_ATO);
  const obj4 = useInappropriateConversationWarningsForChannel;
  const tmp4 = obj4.useInappropriateConversationWarningsForChannel(channelId).length > 0;
  const obj5 = useStrangerDangerWarning;
  if (!isSpamMessageRequest) {
    if (!isMessageRequest) {
      if (!tmp4) {
        if (null == obj5.useStrangerDangerWarning(channelId)) {
          return channelSafetyWarning;
        }
      }
    }
  }
}
