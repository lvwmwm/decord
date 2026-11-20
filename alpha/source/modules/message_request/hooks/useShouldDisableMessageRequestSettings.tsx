// Module ID: 17250
// Function ID: 17251
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [6292, 5456, 5464, 2]
// Exports: useShouldDisableMessageRequestSettings

// Module 17250 (useShouldDisableMessageRequestSettings)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5456 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5464 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6292 */;
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
