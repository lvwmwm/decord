// Module ID: 18283
// Function ID: 18284
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [6783, 5819, 5827, 2]
// Exports: useShouldDisableMessageRequestSettings

// Module 18283 (useShouldDisableMessageRequestSettings)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5819 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5827 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6783 */;
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
