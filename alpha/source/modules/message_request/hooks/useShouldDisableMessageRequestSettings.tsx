// Module ID: 18254
// Function ID: 18255
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [6781, 5817, 5825, 2]
// Exports: useShouldDisableMessageRequestSettings

// Module 18254 (useShouldDisableMessageRequestSettings)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5817 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5825 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6781 */;
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
