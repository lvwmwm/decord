// Module ID: 10436
// Function ID: 80376
// Name: useInappropriateConversationBannerForChannel
// Dependencies: [9139, 10137, 10138, 10140, 10435, 2]
// Exports: useInappropriateConversationBannerForChannel

// Module 10436 (useInappropriateConversationBannerForChannel)
import { SafetyWarningTypes } from "_isNativeReflectConstruct";

const result = require("useSafetyAlertsSettingOrDefault").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationBannerForChannel.tsx");

export const useInappropriateConversationBannerForChannel = function useInappropriateConversationBannerForChannel(channelId, LOCATION_CONTEXT_MOBILE) {
  let obj = require(10137) /* InappropriateConversationExperiment */;
  obj = { location: LOCATION_CONTEXT_MOBILE };
  const isEligibleForInappropriateConversationWarning = obj.useIsEligibleForInappropriateConversationWarning(obj);
  const safetyAlertsSettingOrDefault = require(10138) /* useSafetyAlertsSettingOrDefault */.useSafetyAlertsSettingOrDefault();
  const obj3 = require(10138) /* useSafetyAlertsSettingOrDefault */;
  const inappropriateConversationWarningsForChannel = require(10140) /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId);
  require(10435) /* useChannelSafetyWarning */;
  if (isEligibleForInappropriateConversationWarning) {
    if (safetyAlertsSettingOrDefault) {
      if (0 !== inappropriateConversationWarningsForChannel.length) {
        if (!inappropriateConversationWarningsForChannel.some((type) => {
          let tmp = type.type === outer1_2.INAPPROPRIATE_CONVERSATION_TIER_1;
          if (!tmp) {
            let tmp3 = type.type === outer1_2.INAPPROPRIATE_CONVERSATION_TIER_2;
            if (tmp3) {
              tmp3 = null != type.dismiss_timestamp;
            }
            tmp = tmp3;
          }
          return tmp;
        })) {
          return tmp4;
        }
      }
    }
  }
};
