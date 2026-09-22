// Module ID: 11105
// Function ID: 11106
// Name: useInappropriateConversationBannerForChannel
// Dependencies: [11050, 11104, 11106, 11108, 11109, 2]
// Exports: useInappropriateConversationBannerForChannel

// Module 11105 (useInappropriateConversationBannerForChannel)
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 11050 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11104 */;
import useSafetyAlertsSettingOrDefault from "useSafetyAlertsSettingOrDefault" /* 11106 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 11108 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 11109 */;
import size from "module_2" /* 2 */;

const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationBannerForChannel.tsx");

export const useInappropriateConversationBannerForChannel = function useInappropriateConversationBannerForChannel(channelId, LOCATION_CONTEXT_MOBILE) {
  const isEligibleForInappropriateConversationWarning = SelfModInappropriateConversationExperiment.useIsEligibleForInappropriateConversationWarning({ location: LOCATION_CONTEXT_MOBILE });
  const obj2 = { location: LOCATION_CONTEXT_MOBILE };
  const safetyAlertsSettingOrDefault = useSafetyAlertsSettingOrDefault.useSafetyAlertsSettingOrDefault();
  const inappropriateConversationWarningsForChannel = useInappropriateConversationWarningsForChannel.useInappropriateConversationWarningsForChannel(channelId);
  useChannelSafetyWarning;
  if (isEligibleForInappropriateConversationWarning) {
    if (safetyAlertsSettingOrDefault) {
      if (0 !== inappropriateConversationWarningsForChannel.length) {
        if (!inappropriateConversationWarningsForChannel.some((type) => {
          let tmp2 = type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1;
          if (!tmp2) {
            let tmp3 = type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2;
            if (tmp3) {
              tmp3 = null != type.dismiss_timestamp;
            }
            tmp2 = tmp3;
          }
          return tmp2;
        })) {
          return tmp4;
        }
      }
    }
  }
};
