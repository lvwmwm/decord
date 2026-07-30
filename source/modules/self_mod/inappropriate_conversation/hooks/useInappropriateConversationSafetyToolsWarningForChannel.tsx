// Module ID: 10125
// Function ID: 10126
// Name: useInappropriateConversationSafetyToolsWarningForChannel
// Dependencies: [10126, 10127, 10129, 2]
// Exports: useInappropriateConversationSafetyToolsWarningForChannel

// Module 10125 (useInappropriateConversationSafetyToolsWarningForChannel)
const result = require("useInappropriateConversationWarningsForChannel").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationSafetyToolsWarningForChannel.tsx");

export const useInappropriateConversationSafetyToolsWarningForChannel = function useInappropriateConversationSafetyToolsWarningForChannel(channelId) {
  const isEligibleForInappropriateConversationWarning = require(10126) /* InappropriateConversationExperiment */.useIsEligibleForInappropriateConversationWarning({ location: "safety-tools-button" });
  const obj = require(10126) /* InappropriateConversationExperiment */;
  const safetyAlertsSettingOrDefault = require(10127) /* useSafetyAlertsSettingOrDefault */.useSafetyAlertsSettingOrDefault();
  const obj2 = require(10127) /* useSafetyAlertsSettingOrDefault */;
  const inappropriateConversationWarningsForChannel = require(10129) /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId);
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
