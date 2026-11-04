// Module ID: 18174
// Function ID: 18175
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [6861, 5827, 5834, 2]
// Exports: useShouldDisableMessageRequestSettings

// Module 18174 (useShouldDisableMessageRequestSettings)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5827 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5834 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6861 */;
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
