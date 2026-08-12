// Module ID: 10423
// Function ID: 10424
// Name: useInappropriateConversationSafetyToolsWarningForChannel
// Dependencies: [10392, 10393, 10390, 2]
// Exports: useInappropriateConversationSafetyToolsWarningForChannel

// Module 10423 (useInappropriateConversationSafetyToolsWarningForChannel)
const result = require("useInappropriateConversationWarningsForChannel").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationSafetyToolsWarningForChannel.tsx");

export const useInappropriateConversationSafetyToolsWarningForChannel = function useInappropriateConversationSafetyToolsWarningForChannel(channelId) {
  const isEligibleForInappropriateConversationWarning = require(10392) /* InappropriateConversationExperiment */.useIsEligibleForInappropriateConversationWarning({ location: "safety-tools-button" });
  const obj = require(10392) /* InappropriateConversationExperiment */;
  const safetyAlertsSettingOrDefault = require(10393) /* useSafetyAlertsSettingOrDefault */.useSafetyAlertsSettingOrDefault();
  const obj2 = require(10393) /* useSafetyAlertsSettingOrDefault */;
  const inappropriateConversationWarningsForChannel = require(10390) /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId);
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
