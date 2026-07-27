// Module ID: 10371
// Function ID: 80050
// Name: useInappropriateConversationBannerForChannel
// Dependencies: [9031, 10069, 10070, 10072, 10370, 2]
// Exports: useInappropriateConversationBannerForChannel

// Module 10371 (useInappropriateConversationBannerForChannel)
import { SafetyWarningTypes } from "_isNativeReflectConstruct";

const result = require("useSafetyAlertsSettingOrDefault").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationBannerForChannel.tsx");

export const useInappropriateConversationBannerForChannel = function useInappropriateConversationBannerForChannel(channelId, LOCATION_CONTEXT_MOBILE) {
  let obj = require(10069) /* InappropriateConversationExperiment */;
  obj = { location: LOCATION_CONTEXT_MOBILE };
  const isEligibleForInappropriateConversationWarning = obj.useIsEligibleForInappropriateConversationWarning(obj);
  const safetyAlertsSettingOrDefault = require(10070) /* useSafetyAlertsSettingOrDefault */.useSafetyAlertsSettingOrDefault();
  const obj3 = require(10070) /* useSafetyAlertsSettingOrDefault */;
  const inappropriateConversationWarningsForChannel = require(10072) /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId);
  require(10370) /* useChannelSafetyWarning */;
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
