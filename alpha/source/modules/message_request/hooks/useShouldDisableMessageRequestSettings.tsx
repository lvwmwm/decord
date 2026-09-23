// Module ID: 16269
// Function ID: 16270
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [5039, 5726, 7627, 2]
// Exports: useShouldDisableMessageRequestSettings

// Module 16269 (useShouldDisableMessageRequestSettings)
import AgeVerificationUtils from "AgeVerificationUtils" /* 5039 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 7627 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useShouldDisableMessageRequestSettings.tsx");

export const useShouldDisableMessageRequestSettings = function useShouldDisableMessageRequestSettings() {
  let isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
  if (isVerifiedTeen) {
    isVerifiedTeen = obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  }
  return isVerifiedTeen;
};
