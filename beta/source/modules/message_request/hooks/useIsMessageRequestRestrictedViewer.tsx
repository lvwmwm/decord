// Module ID: 12589
// Function ID: 12590
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [558, 568, 4970, 5642, 7543, 12590, 2]

// Module 12589 (useIsMessageRequestRestrictedViewer)
import c from "c" /* 568 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 4970 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5642 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 7543 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export const useIsMessageRequestRestrictedViewer = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const cResult = c.c(2);
  const isExplicitlyVerifiedAdult = AgeVerificationUtils.useIsExplicitlyVerifiedAdult();
  const isSettingTeenByDefault = RegionalFeatureConfigUtils.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  if (cResult[0] !== location) {
    const obj4 = { location };
    cResult[0] = location;
    cResult[1] = obj4;
    let tmp5 = obj4;
  } else {
    tmp5 = cResult[1];
  }
  let enabled = !isExplicitlyVerifiedAdult;
  if (!isExplicitlyVerifiedAdult) {
    enabled = isSettingTeenByDefault;
  }
  if (enabled) {
    enabled = obj5.useConfig(tmp5).enabled;
  }
  return enabled;
}) : ((location) => {
  const isExplicitlyVerifiedAdult = AgeVerificationUtils.useIsExplicitlyVerifiedAdult();
  const isSettingTeenByDefault = RegionalFeatureConfigUtils.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  let enabled = !isExplicitlyVerifiedAdult;
  if (!isExplicitlyVerifiedAdult) {
    enabled = isSettingTeenByDefault;
  }
  if (enabled) {
    enabled = obj3.useConfig(obj4).enabled;
  }
  return enabled;
});
