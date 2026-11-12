// Module ID: 18449
// Function ID: 18450
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [6767, 5932, 5940, 2]
// Exports: useShouldDisableMessageRequestSettings

// Module 18449 (useShouldDisableMessageRequestSettings)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5932 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5940 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6767 */;
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
