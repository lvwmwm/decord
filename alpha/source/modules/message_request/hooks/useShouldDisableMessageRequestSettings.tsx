// Module ID: 17525
// Function ID: 17526
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [6794, 5674, 5682, 2]
// Exports: useShouldDisableMessageRequestSettings

// Module 17525 (useShouldDisableMessageRequestSettings)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5674 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5682 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6794 */;
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
