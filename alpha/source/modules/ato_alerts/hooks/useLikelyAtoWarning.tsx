// Module ID: 11731
// Function ID: 11732
// Name: useLikelyAtoWarning
// Dependencies: [11722, 11723, 11724, 11725, 11726, 11721, 2]
// Exports: useLikelyAtoWarning

// Module 11731 (useLikelyAtoWarning)
import useStrangerDangerWarning from "useStrangerDangerWarning" /* 11721 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 11722 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 11723 */;
import useIsMessageRequest from "useIsMessageRequest" /* 11724 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 11725 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 11726 */;
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
