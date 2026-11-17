// Module ID: 18617
// Function ID: 18618
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [6815, 5989, 5997, 2]
// Exports: useShouldDisableMessageRequestSettings

// Module 18617 (useShouldDisableMessageRequestSettings)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5989 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5997 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6815 */;
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
