// Module ID: 10396
// Function ID: 80121
// Name: useInappropriateConversationBannerForChannel
// Dependencies: []
// Exports: useInappropriateConversationBannerForChannel

// Module 10396 (useInappropriateConversationBannerForChannel)
const SafetyWarningTypes = require(dependencyMap[0]).SafetyWarningTypes;
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationBannerForChannel.tsx");

export const useInappropriateConversationBannerForChannel = function useInappropriateConversationBannerForChannel(channelId, LOCATION_CONTEXT_MOBILE) {
  let obj = require(dependencyMap[1]);
  obj = { location: LOCATION_CONTEXT_MOBILE };
  const isEligibleForInappropriateConversationWarning = obj.useIsEligibleForInappropriateConversationWarning(obj);
  const safetyAlertsSettingOrDefault = require(dependencyMap[2]).useSafetyAlertsSettingOrDefault();
  const obj3 = require(dependencyMap[2]);
  const inappropriateConversationWarningsForChannel = require(dependencyMap[3]).useInappropriateConversationWarningsForChannel(channelId);
  require(dependencyMap[4]);
  if (isEligibleForInappropriateConversationWarning) {
    if (safetyAlertsSettingOrDefault) {
      if (0 !== inappropriateConversationWarningsForChannel.length) {
        if (!inappropriateConversationWarningsForChannel.some((type) => {
          let tmp = type.type === closure_2.INAPPROPRIATE_CONVERSATION_TIER_1;
          if (!tmp) {
            let tmp3 = type.type === closure_2.INAPPROPRIATE_CONVERSATION_TIER_2;
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
