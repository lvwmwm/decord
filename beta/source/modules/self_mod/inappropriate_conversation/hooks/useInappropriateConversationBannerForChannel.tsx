// Module ID: 11794
// Function ID: 11795
// Name: useInappropriateConversationBannerForChannel
// Dependencies: [11789, 11795, 11796, 11793, 11792, 2]
// Exports: useInappropriateConversationBannerForChannel

// Module 11794 (useInappropriateConversationBannerForChannel)
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 11789 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 11792 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 11793 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11795 */;
import useSafetyAlertsSettingOrDefault from "useSafetyAlertsSettingOrDefault" /* 11796 */;
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
