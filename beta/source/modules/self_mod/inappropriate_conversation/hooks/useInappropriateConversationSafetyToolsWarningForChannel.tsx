// Module ID: 10939
// Function ID: 10940
// Name: useInappropriateConversationSafetyToolsWarningForChannel
// Dependencies: [10431, 10433, 10435, 2]
// Exports: useInappropriateConversationSafetyToolsWarningForChannel

// Module 10939 (useInappropriateConversationSafetyToolsWarningForChannel)
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 10431 */;
import useSafetyAlertsSettingOrDefault from "useSafetyAlertsSettingOrDefault" /* 10433 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 10435 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationSafetyToolsWarningForChannel.tsx");

export const useInappropriateConversationSafetyToolsWarningForChannel = function useInappropriateConversationSafetyToolsWarningForChannel(channelId) {
  const obj = SelfModInappropriateConversationExperiment;
  const isEligibleForInappropriateConversationWarning = obj.useIsEligibleForInappropriateConversationWarning({ location: "safety-tools-button" });
  const obj2 = useSafetyAlertsSettingOrDefault;
  const safetyAlertsSettingOrDefault = obj2.useSafetyAlertsSettingOrDefault();
  const obj3 = useInappropriateConversationWarningsForChannel;
  const inappropriateConversationWarningsForChannel = obj3.useInappropriateConversationWarningsForChannel(channelId);
  if (isEligibleForInappropriateConversationWarning) {
    if (safetyAlertsSettingOrDefault) {
      const found = inappropriateConversationWarningsForChannel.filter((dismiss_timestamp) => null != dismiss_timestamp.dismiss_timestamp);
      let num = 0;
      if (0 !== found.length) {
        return found.sort((type, type2) => {
          let num;
          if (type.type > type2.type) {
            num = 1;
          } else {
            num = -1;
          }
          return num;
        })[0];
      }
    }
  }
};
