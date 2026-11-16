// Module ID: 18576
// Function ID: 18577
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [6820, 5985, 5993, 2]
// Exports: useShouldDisableMessageRequestSettings

// Module 18576 (useShouldDisableMessageRequestSettings)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5985 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5993 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6820 */;
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
