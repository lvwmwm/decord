// Module ID: 15499
// Function ID: 15500
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [5048, 5735, 6717, 2]
// Exports: useShouldDisableMessageRequestSettings

// Module 15499 (useShouldDisableMessageRequestSettings)
import AgeVerificationUtils from "AgeVerificationUtils" /* 5048 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 6717 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useShouldDisableMessageRequestSettings.tsx");

export const useShouldDisableMessageRequestSettings = function useShouldDisableMessageRequestSettings() {
  let isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
  if (isVerifiedTeen) {
    isVerifiedTeen = obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  }
  return isVerifiedTeen;
};
