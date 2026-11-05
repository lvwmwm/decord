// Module ID: 18202
// Function ID: 18203
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [6864, 5829, 5837, 2]
// Exports: useShouldDisableMessageRequestSettings

// Module 18202 (useShouldDisableMessageRequestSettings)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5829 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5837 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6864 */;
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
