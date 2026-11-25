// Module ID: 11798
// Function ID: 11799
// Name: useLikelyAtoWarning
// Dependencies: [11789, 11790, 11791, 11792, 11793, 11788, 2]
// Exports: useLikelyAtoWarning

// Module 11798 (useLikelyAtoWarning)
import useStrangerDangerWarning from "useStrangerDangerWarning" /* 11788 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 11789 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 11790 */;
import useIsMessageRequest from "useIsMessageRequest" /* 11791 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 11792 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 11793 */;
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
