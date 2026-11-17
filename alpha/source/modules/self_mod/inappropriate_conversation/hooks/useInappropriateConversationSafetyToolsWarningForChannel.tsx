// Module ID: 12505
// Function ID: 12506
// Name: useInappropriateConversationSafetyToolsWarningForChannel
// Dependencies: [12468, 12469, 12466, 2]
// Exports: useInappropriateConversationSafetyToolsWarningForChannel

// Module 12505 (useInappropriateConversationSafetyToolsWarningForChannel)
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 12466 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 12468 */;
import useSafetyAlertsSettingOrDefault from "useSafetyAlertsSettingOrDefault" /* 12469 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationSafetyToolsWarningForChannel.tsx");

export function useInappropriateConversationSafetyToolsWarningForChannel(channelId) {
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
}
