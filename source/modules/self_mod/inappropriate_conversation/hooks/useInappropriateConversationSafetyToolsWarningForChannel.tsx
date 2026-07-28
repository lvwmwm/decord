// Module ID: 10108
// Function ID: 78196
// Name: useInappropriateConversationSafetyToolsWarningForChannel
// Dependencies: [10109, 10110, 10112, 2]
// Exports: useInappropriateConversationSafetyToolsWarningForChannel

// Module 10108 (useInappropriateConversationSafetyToolsWarningForChannel)
const result = require("useInappropriateConversationWarningsForChannel").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationSafetyToolsWarningForChannel.tsx");

export const useInappropriateConversationSafetyToolsWarningForChannel = function useInappropriateConversationSafetyToolsWarningForChannel(channelId) {
  const isEligibleForInappropriateConversationWarning = require(10109) /* InappropriateConversationExperiment */.useIsEligibleForInappropriateConversationWarning({ location: "safety-tools-button" });
  const obj = require(10109) /* InappropriateConversationExperiment */;
  const safetyAlertsSettingOrDefault = require(10110) /* useSafetyAlertsSettingOrDefault */.useSafetyAlertsSettingOrDefault();
  const obj2 = require(10110) /* useSafetyAlertsSettingOrDefault */;
  const inappropriateConversationWarningsForChannel = require(10112) /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId);
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
