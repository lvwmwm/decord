// Module ID: 11673
// Function ID: 11674
// Name: useLikelyAtoWarning
// Dependencies: [11664, 11665, 11666, 11667, 11668, 11663, 2]
// Exports: useLikelyAtoWarning

// Module 11673 (useLikelyAtoWarning)
import useStrangerDangerWarning from "useStrangerDangerWarning" /* 11663 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 11664 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 11665 */;
import useIsMessageRequest from "useIsMessageRequest" /* 11666 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 11667 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 11668 */;
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
