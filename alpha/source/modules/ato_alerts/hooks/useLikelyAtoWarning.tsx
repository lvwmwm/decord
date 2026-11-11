// Module ID: 11974
// Function ID: 11975
// Name: useLikelyAtoWarning
// Dependencies: [10833, 11965, 11966, 11967, 11969, 11964, 2]
// Exports: useLikelyAtoWarning

// Module 11974 (useLikelyAtoWarning)
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10833 */;
import useStrangerDangerWarning from "useStrangerDangerWarning" /* 11964 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 11965 */;
import useIsMessageRequest from "useIsMessageRequest" /* 11966 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 11967 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 11969 */;
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
