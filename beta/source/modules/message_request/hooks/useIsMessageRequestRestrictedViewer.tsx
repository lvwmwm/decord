// Module ID: 11827
// Function ID: 11828
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [558, 576, 5049, 5736, 6718, 11828, 2]

// Module 11827 (useIsMessageRequestRestrictedViewer)
import react from "react" /* 576 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5049 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5736 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 6718 */;
import MessageRequestRestrictionExperimentDefault from "MessageRequestRestrictionExperiment" /* 11828 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = AgeVerificationUtils;
  const isExplicitlyVerifiedAdult = obj2.useIsExplicitlyVerifiedAdult();
  const obj3 = RegionalFeatureConfigUtils;
  const isSettingTeenByDefault = obj3.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  if (cResult[0] !== location) {
    const obj4 = { location };
    cResult[0] = location;
    cResult[1] = obj4;
    tmp5 = obj4;
  } else {
    tmp5 = cResult[1];
  }
  let tmp6 = !isExplicitlyVerifiedAdult;
  const obj5 = MessageRequestRestrictionExperimentDefault;
  const enabled = obj5.useConfig(tmp5).enabled;
  if (!isExplicitlyVerifiedAdult) {
    tmp6 = isSettingTeenByDefault;
  }
  if (tmp6) {
    tmp6 = enabled;
  }
  return tmp6;
}) : ((location) => {
  const obj = AgeVerificationUtils;
  const isExplicitlyVerifiedAdult = obj.useIsExplicitlyVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const isSettingTeenByDefault = obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  let tmp3 = !isExplicitlyVerifiedAdult;
  const obj3 = MessageRequestRestrictionExperimentDefault;
  const obj4 = { location };
  const enabled = obj3.useConfig(obj4).enabled;
  if (!isExplicitlyVerifiedAdult) {
    tmp3 = isSettingTeenByDefault;
  }
  if (tmp3) {
    tmp3 = enabled;
  }
  return tmp3;
});
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export const useIsMessageRequestRestrictedViewer = tmp2;
