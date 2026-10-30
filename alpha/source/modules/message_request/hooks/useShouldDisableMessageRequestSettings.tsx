// Module ID: 17866
// Function ID: 17867
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [6720, 5688, 5695, 2]
// Exports: useShouldDisableMessageRequestSettings

// Module 17866 (useShouldDisableMessageRequestSettings)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5688 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5695 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6720 */;
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
