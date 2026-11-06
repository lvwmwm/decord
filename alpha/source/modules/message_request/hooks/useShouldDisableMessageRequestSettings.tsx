// Module ID: 18194
// Function ID: 18195
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [6806, 5847, 5855, 2]
// Exports: useShouldDisableMessageRequestSettings

// Module 18194 (useShouldDisableMessageRequestSettings)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5847 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5855 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6806 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useShouldDisableMessageRequestSettings.tsx");

export function useShouldDisableMessageRequestSettings() {
  const obj = AgeVerificationUtils;
  let isVerifiedTeen = obj.useIsVerifiedTeen();
  const useIsSettingTeenByDefault = RegionalFeatureConfigUtils.useIsSettingTeenByDefault;
  RegionalFeatureConfigUtils;
  if (isVerifiedTeen) {
    isVerifiedTeen = useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  }
  return isVerifiedTeen;
}
