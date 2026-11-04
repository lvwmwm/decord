// Module ID: 11454
// Function ID: 11455
// Name: useLikelyAtoWarning
// Dependencies: [10982, 11446, 11447, 11448, 11449, 11445, 2]
// Exports: useLikelyAtoWarning

// Module 11454 (useLikelyAtoWarning)
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10982 */;
import useStrangerDangerWarning from "useStrangerDangerWarning" /* 11445 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 11446 */;
import useIsMessageRequest from "useIsMessageRequest" /* 11447 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 11448 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 11449 */;
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
