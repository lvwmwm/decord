// Module ID: 17589
// Function ID: 17590
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [6825, 5705, 5713, 2]
// Exports: useShouldDisableMessageRequestSettings

// Module 17589 (useShouldDisableMessageRequestSettings)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5705 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5713 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6825 */;
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
