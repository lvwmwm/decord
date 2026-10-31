// Module ID: 17909
// Function ID: 17910
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [6726, 5693, 5700, 2]
// Exports: useShouldDisableMessageRequestSettings

// Module 17909 (useShouldDisableMessageRequestSettings)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5693 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5700 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6726 */;
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
