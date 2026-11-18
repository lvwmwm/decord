// Module ID: 11753
// Function ID: 11754
// Name: useLikelyAtoWarning
// Dependencies: [11744, 11745, 11746, 11747, 11748, 11743, 2]
// Exports: useLikelyAtoWarning

// Module 11753 (useLikelyAtoWarning)
import useStrangerDangerWarning from "useStrangerDangerWarning" /* 11743 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 11744 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 11745 */;
import useIsMessageRequest from "useIsMessageRequest" /* 11746 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 11747 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 11748 */;
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
