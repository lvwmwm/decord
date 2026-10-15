// Module ID: 16876
// Function ID: 16877
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [558, 6125, 6137, 7218, 2]

// Module 16876 (useShouldDisableMessageRequestSettings)
import AgeVerificationUtils from "AgeVerificationUtils" /* 6125 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 6137 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 7218 */;
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
