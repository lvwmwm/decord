// Module ID: 10095
// Function ID: 78189
// Name: useInappropriateConversationSafetyToolsWarningForChannel
// Dependencies: []
// Exports: useInappropriateConversationSafetyToolsWarningForChannel

// Module 10095 (useInappropriateConversationSafetyToolsWarningForChannel)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationSafetyToolsWarningForChannel.tsx");

export const useInappropriateConversationSafetyToolsWarningForChannel = function useInappropriateConversationSafetyToolsWarningForChannel(channelId) {
  const isEligibleForInappropriateConversationWarning = require(dependencyMap[0]).useIsEligibleForInappropriateConversationWarning({ location: "safety-tools-button" });
  const obj = require(dependencyMap[0]);
  const safetyAlertsSettingOrDefault = require(dependencyMap[1]).useSafetyAlertsSettingOrDefault();
  const obj2 = require(dependencyMap[1]);
  const inappropriateConversationWarningsForChannel = require(dependencyMap[2]).useInappropriateConversationWarningsForChannel(channelId);
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
