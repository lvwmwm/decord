// Module ID: 17430
// Function ID: 17431
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [6319, 5485, 5493, 2]
// Exports: useShouldDisableMessageRequestSettings

// Module 17430 (useShouldDisableMessageRequestSettings)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5485 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5493 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6319 */;
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
