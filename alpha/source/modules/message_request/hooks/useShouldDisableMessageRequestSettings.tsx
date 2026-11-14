// Module ID: 18574
// Function ID: 18575
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [6830, 5995, 6003, 2]
// Exports: useShouldDisableMessageRequestSettings

// Module 18574 (useShouldDisableMessageRequestSettings)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5995 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 6003 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6830 */;
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
