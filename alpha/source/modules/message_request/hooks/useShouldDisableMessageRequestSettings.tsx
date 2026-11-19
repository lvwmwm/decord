// Module ID: 17423
// Function ID: 17424
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [6290, 5454, 5462, 2]
// Exports: useShouldDisableMessageRequestSettings

// Module 17423 (useShouldDisableMessageRequestSettings)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5454 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5462 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6290 */;
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
