// Module ID: 10967
// Function ID: 10968
// Name: useInappropriateConversationSafetyToolsWarningForChannel
// Dependencies: [10643, 10645, 10647, 2]
// Exports: useInappropriateConversationSafetyToolsWarningForChannel

// Module 10967 (useInappropriateConversationSafetyToolsWarningForChannel)
import set from "set" /* 2 */;
import InappropriateConversationExperiment from "InappropriateConversationExperiment" /* 10643 */;
import useSafetyAlertsSettingOrDefault from "useSafetyAlertsSettingOrDefault" /* 10645 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 10647 */;

const result = set.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationSafetyToolsWarningForChannel.tsx");

export const useInappropriateConversationSafetyToolsWarningForChannel = function useInappropriateConversationSafetyToolsWarningForChannel(channelId) {
  const isEligibleForInappropriateConversationWarning = InappropriateConversationExperiment.useIsEligibleForInappropriateConversationWarning({ location: "safety-tools-button" });
  const obj = InappropriateConversationExperiment;
  const safetyAlertsSettingOrDefault = useSafetyAlertsSettingOrDefault.useSafetyAlertsSettingOrDefault();
  const obj2 = useSafetyAlertsSettingOrDefault;
  const inappropriateConversationWarningsForChannel = useInappropriateConversationWarningsForChannel.useInappropriateConversationWarningsForChannel(channelId);
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
