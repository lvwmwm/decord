// Module ID: 10367
// Function ID: 10368
// Name: useInappropriateConversationBannerForChannel
// Dependencies: [10266, 558, 576, 10368, 10369, 10366, 10365, 2]

// Module 10367 (useInappropriateConversationBannerForChannel)
import react from "react" /* 576 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10266 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const useChannelSafetyWarning = tmp(10365);
const useInappropriateConversationWarningsForChannel = tmp(10366);
const SelfModInappropriateConversationExperiment = tmp(10368);
const useSafetyAlertsSettingOrDefault = tmp(10369);
const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useInappropriateConversationBannerForChannel(arg0, location) {
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
}) : (function useInappropriateConversationBannerForChannel(arg0, location) {
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
