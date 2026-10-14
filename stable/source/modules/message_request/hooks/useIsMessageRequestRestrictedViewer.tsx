// Module ID: 12083
// Function ID: 12084
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [558, 5102, 5580, 6802, 2]

// Module 12083 (useIsMessageRequestRestrictedViewer)
import AgeVerificationUtils from "AgeVerificationUtils" /* 5102 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5580 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 6802 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = AgeVerificationUtils;
  const isExplicitlyVerifiedAdult = obj.useIsExplicitlyVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = !isExplicitlyVerifiedAdult && obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  return tmp2;
}) : (() => {
  const obj = AgeVerificationUtils;
  const isExplicitlyVerifiedAdult = obj.useIsExplicitlyVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = !isExplicitlyVerifiedAdult && obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  return tmp2;
});
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export const useIsMessageRequestRestrictedViewer = tmp2;
