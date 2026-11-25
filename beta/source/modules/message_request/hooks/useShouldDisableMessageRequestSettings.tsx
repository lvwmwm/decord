// Module ID: 17384
// Function ID: 17385
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [6411, 5575, 5583, 2]
// Exports: useShouldDisableMessageRequestSettings

// Module 17384 (useShouldDisableMessageRequestSettings)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5575 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5583 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6411 */;
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
