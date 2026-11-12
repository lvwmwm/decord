// Module ID: 18292
// Function ID: 18293
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [6813, 5849, 5857, 2]
// Exports: useShouldDisableMessageRequestSettings

// Module 18292 (useShouldDisableMessageRequestSettings)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5849 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5857 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6813 */;
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
