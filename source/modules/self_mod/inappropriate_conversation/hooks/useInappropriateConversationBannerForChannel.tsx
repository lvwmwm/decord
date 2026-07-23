// Module ID: 10407
// Function ID: 80184
// Name: useInappropriateConversationBannerForChannel
// Dependencies: [9101, 10105, 10106, 10108, 10406, 2]
// Exports: useInappropriateConversationBannerForChannel

// Module 10407 (useInappropriateConversationBannerForChannel)
import { SafetyWarningTypes } from "_isNativeReflectConstruct";

const result = require("useSafetyAlertsSettingOrDefault").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationBannerForChannel.tsx");

export const useInappropriateConversationBannerForChannel = function useInappropriateConversationBannerForChannel(channelId, LOCATION_CONTEXT_MOBILE) {
  let obj = require(10105) /* InappropriateConversationExperiment */;
  obj = { location: LOCATION_CONTEXT_MOBILE };
  const isEligibleForInappropriateConversationWarning = obj.useIsEligibleForInappropriateConversationWarning(obj);
  const safetyAlertsSettingOrDefault = require(10106) /* useSafetyAlertsSettingOrDefault */.useSafetyAlertsSettingOrDefault();
  const obj3 = require(10106) /* useSafetyAlertsSettingOrDefault */;
  const inappropriateConversationWarningsForChannel = require(10108) /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId);
  require(10406) /* useChannelSafetyWarning */;
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
