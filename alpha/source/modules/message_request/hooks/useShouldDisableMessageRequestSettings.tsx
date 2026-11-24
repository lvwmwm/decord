// Module ID: 17414
// Function ID: 17415
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [6699, 5579, 5587, 2]
// Exports: useShouldDisableMessageRequestSettings

// Module 17414 (useShouldDisableMessageRequestSettings)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5579 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5587 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6699 */;
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
