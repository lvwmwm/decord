// Module ID: 12471
// Function ID: 12472
// Name: useLikelyAtoWarning
// Dependencies: [12462, 12463, 12464, 12465, 12466, 12461, 2]
// Exports: useLikelyAtoWarning

// Module 12471 (useLikelyAtoWarning)
import useStrangerDangerWarning from "useStrangerDangerWarning" /* 12461 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 12462 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 12463 */;
import useIsMessageRequest from "useIsMessageRequest" /* 12464 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 12465 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 12466 */;
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
