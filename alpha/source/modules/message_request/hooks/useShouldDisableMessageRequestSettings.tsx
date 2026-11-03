// Module ID: 18065
// Function ID: 18066
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [6846, 5813, 5820, 2]
// Exports: useShouldDisableMessageRequestSettings

// Module 18065 (useShouldDisableMessageRequestSettings)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5813 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5820 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6846 */;
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
