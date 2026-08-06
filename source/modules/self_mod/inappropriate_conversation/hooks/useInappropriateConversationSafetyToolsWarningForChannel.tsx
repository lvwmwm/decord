// Module ID: 10294
// Function ID: 10295
// Name: useInappropriateConversationSafetyToolsWarningForChannel
// Dependencies: [10263, 10264, 10261, 2]
// Exports: useInappropriateConversationSafetyToolsWarningForChannel

// Module 10294 (useInappropriateConversationSafetyToolsWarningForChannel)
const result = require("useInappropriateConversationWarningsForChannel").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationSafetyToolsWarningForChannel.tsx");

export const useInappropriateConversationSafetyToolsWarningForChannel = function useInappropriateConversationSafetyToolsWarningForChannel(channelId) {
  const isEligibleForInappropriateConversationWarning = require(10263) /* InappropriateConversationExperiment */.useIsEligibleForInappropriateConversationWarning({ location: "safety-tools-button" });
  const obj = require(10263) /* InappropriateConversationExperiment */;
  const safetyAlertsSettingOrDefault = require(10264) /* useSafetyAlertsSettingOrDefault */.useSafetyAlertsSettingOrDefault();
  const obj2 = require(10264) /* useSafetyAlertsSettingOrDefault */;
  const inappropriateConversationWarningsForChannel = require(10261) /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId);
  if (isEligibleForInappropriateConversationWarning) {
    if (safetyAlertsSettingOrDefault) {
      const found = inappropriateConversationWarningsForChannel.filter((dismiss_timestamp) => null != dismiss_timestamp.dismiss_timestamp);
      if (0 !== found.length) {
        return found.sort((type, type2) => {
          if (type.type > type2.type) {
            let num = 1;
          } else {
            num = -1;
          }
          return num;
        })[0];
      }
    }
  }
};
