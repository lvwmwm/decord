// Module ID: 16208
// Function ID: 16209
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [5000, 5672, 7573, 2]
// Exports: useShouldDisableMessageRequestSettings

// Module 16208 (useShouldDisableMessageRequestSettings)
import AgeVerificationUtils from "AgeVerificationUtils" /* 5000 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 7573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useShouldDisableMessageRequestSettings.tsx");

export const useShouldDisableMessageRequestSettings = function useShouldDisableMessageRequestSettings() {
  let isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
  if (isVerifiedTeen) {
    isVerifiedTeen = obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  }
  return isVerifiedTeen;
};
