// Module ID: 15497
// Function ID: 15498
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [5048, 5735, 6717, 2]
// Exports: useShouldDisableMessageRequestSettings

// Module 15497 (useShouldDisableMessageRequestSettings)
import AgeVerificationUtils from "AgeVerificationUtils" /* 5048 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5735 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 6717 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useShouldDisableMessageRequestSettings.tsx");

export const useShouldDisableMessageRequestSettings = function useShouldDisableMessageRequestSettings() {
  const obj = AgeVerificationUtils;
  let isVerifiedTeen = obj.useIsVerifiedTeen();
  const useIsSettingTeenByDefault = RegionalFeatureConfigUtils.useIsSettingTeenByDefault;
  RegionalFeatureConfigUtils;
  if (isVerifiedTeen) {
    isVerifiedTeen = useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  }
  return isVerifiedTeen;
};
