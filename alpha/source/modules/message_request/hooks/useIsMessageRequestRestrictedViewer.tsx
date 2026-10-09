// Module ID: 12115
// Function ID: 12116
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [558, 5906, 5919, 6991, 2]

// Module 12115 (useIsMessageRequestRestrictedViewer)
import AgeVerificationUtils from "AgeVerificationUtils" /* 5906 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5919 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 6991 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsMessageRequestRestrictedViewer() {
  const obj = AgeVerificationUtils;
  const isVerifiedAdult = obj.useIsVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = !isVerifiedAdult && obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  return tmp2;
}) : (function useIsMessageRequestRestrictedViewer() {
  const obj = AgeVerificationUtils;
  const isVerifiedAdult = obj.useIsVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = !isVerifiedAdult && obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  return tmp2;
});
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export const useIsMessageRequestRestrictedViewer = tmp2;
