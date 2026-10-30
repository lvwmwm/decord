// Module ID: 11236
// Function ID: 11237
// Name: useInappropriateConversationBannerForChannel
// Dependencies: [10784, 11237, 11238, 11235, 11234, 2]
// Exports: useInappropriateConversationBannerForChannel

// Module 11236 (useInappropriateConversationBannerForChannel)
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10784 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 11234 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 11235 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11237 */;
import useSafetyAlertsSettingOrDefault from "useSafetyAlertsSettingOrDefault" /* 11238 */;
import size from "module_2" /* 2 */;

const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationBannerForChannel.tsx");

export function useInappropriateConversationBannerForChannel(channelId, LOCATION_CONTEXT_MOBILE) {
  const obj = SelfModInappropriateConversationExperiment;
  const obj2 = { location: LOCATION_CONTEXT_MOBILE };
  const isEligibleForInappropriateConversationWarning = obj.useIsEligibleForInappropriateConversationWarning(obj2);
  const obj3 = useSafetyAlertsSettingOrDefault;
  const safetyAlertsSettingOrDefault = obj3.useSafetyAlertsSettingOrDefault();
  const obj4 = useInappropriateConversationWarningsForChannel;
  const inappropriateConversationWarningsForChannel = obj4.useInappropriateConversationWarningsForChannel(channelId);
  let tmp3 = useChannelSafetyWarning;
  if (isEligibleForInappropriateConversationWarning) {
    if (safetyAlertsSettingOrDefault) {
      if (0 !== inappropriateConversationWarningsForChannel.length) {
        if (!inappropriateConversationWarningsForChannel.some((type) => {
          let tmp2 = type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1;
          if (!tmp2) {
            tmp2 = type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2 && null != type.dismiss_timestamp;
            const tmp3 = type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2 && null != type.dismiss_timestamp;
          }
          return tmp2;
        })) {
          return tmp4;
        }
      }
    }
  }
}
