// Module ID: 9564
// Function ID: 9565
// Name: useInappropriateConversationBannerForChannel
// Dependencies: [9559, 558, 576, 9565, 9566, 9563, 9562, 2]

// Module 9564 (useInappropriateConversationBannerForChannel)
import react from "react" /* 576 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 9559 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const useChannelSafetyWarning = tmp(9562);
const useInappropriateConversationWarningsForChannel = tmp(9563);
const SelfModInappropriateConversationExperiment = tmp(9565);
const useSafetyAlertsSettingOrDefault = tmp(9566);
const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, location) => {
  let tmp4;
  const tmp = require;
  let tmp2 = dependencyMap;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = SelfModInappropriateConversationExperiment;
  const isEligibleForInappropriateConversationWarning = tmpResult.useIsEligibleForInappropriateConversationWarning(tmp4);
  const tmpResult4 = useSafetyAlertsSettingOrDefault;
  const safetyAlertsSettingOrDefault = tmpResult4.useSafetyAlertsSettingOrDefault();
  const tmpResult5 = useInappropriateConversationWarningsForChannel;
  const inappropriateConversationWarningsForChannel = tmpResult5.useInappropriateConversationWarningsForChannel(arg0);
  useChannelSafetyWarning;
  if (isEligibleForInappropriateConversationWarning) {
    if (safetyAlertsSettingOrDefault) {
      if (0 !== inappropriateConversationWarningsForChannel.length) {
        if (!inappropriateConversationWarningsForChannel.some((type) => {
          let tmp2 = type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1;
          if (!tmp2) {
            tmp2 = type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2 && null != type.dismiss_timestamp;
            const tmp3 = type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2 && null != type.dismiss_timestamp;
          }
          return tmp2;
        })) {
          return tmp8;
        }
      }
    }
  }
}) : ((arg0, location) => {
  const obj = SelfModInappropriateConversationExperiment;
  const obj2 = { location };
  const isEligibleForInappropriateConversationWarning = obj.useIsEligibleForInappropriateConversationWarning(obj2);
  const obj3 = useSafetyAlertsSettingOrDefault;
  const safetyAlertsSettingOrDefault = obj3.useSafetyAlertsSettingOrDefault();
  const obj4 = useInappropriateConversationWarningsForChannel;
  const inappropriateConversationWarningsForChannel = obj4.useInappropriateConversationWarningsForChannel(arg0);
  let tmp3 = useChannelSafetyWarning;
  if (isEligibleForInappropriateConversationWarning) {
    if (safetyAlertsSettingOrDefault) {
      if (0 !== inappropriateConversationWarningsForChannel.length) {
        if (!inappropriateConversationWarningsForChannel.some((type) => {
          let tmp2 = type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1;
          if (!tmp2) {
            tmp2 = type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2 && null != type.dismiss_timestamp;
            const tmp3 = type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2 && null != type.dismiss_timestamp;
          }
          return tmp2;
        })) {
          return tmp4;
        }
      }
    }
  }
});
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationBannerForChannel.tsx");

export const useInappropriateConversationBannerForChannel = tmp2;
