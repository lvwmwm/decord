// Module ID: 11727
// Function ID: 11728
// Name: useInappropriateConversationBannerForChannel
// Dependencies: [11722, 11728, 11729, 11726, 11725, 2]
// Exports: useInappropriateConversationBannerForChannel

// Module 11727 (useInappropriateConversationBannerForChannel)
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 11722 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 11725 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 11726 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11728 */;
import useSafetyAlertsSettingOrDefault from "useSafetyAlertsSettingOrDefault" /* 11729 */;
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
