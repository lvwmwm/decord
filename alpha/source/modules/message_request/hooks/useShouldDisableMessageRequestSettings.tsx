// Module ID: 16291
// Function ID: 16292
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [558, 5909, 5921, 6998, 2]

// Module 16291 (useShouldDisableMessageRequestSettings)
import AgeVerificationUtils from "AgeVerificationUtils" /* 5909 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5921 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 6998 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldDisableMessageRequestSettings() {
  const obj = AgeVerificationUtils;
  let isVerifiedTeen = obj.useIsVerifiedTeen();
  const useIsSettingTeenByDefault = RegionalFeatureConfigUtils.useIsSettingTeenByDefault;
  RegionalFeatureConfigUtils;
  if (isVerifiedTeen) {
    isVerifiedTeen = useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  }
  return isVerifiedTeen;
}) : (function useShouldDisableMessageRequestSettings() {
  const obj = AgeVerificationUtils;
  let isVerifiedTeen = obj.useIsVerifiedTeen();
  const useIsSettingTeenByDefault = RegionalFeatureConfigUtils.useIsSettingTeenByDefault;
  RegionalFeatureConfigUtils;
  if (isVerifiedTeen) {
    isVerifiedTeen = useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  }
  return isVerifiedTeen;
});
const result = size.fileFinishedImporting("modules/message_request/hooks/useShouldDisableMessageRequestSettings.tsx");

export const useShouldDisableMessageRequestSettings = tmp2;
