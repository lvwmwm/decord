// Module ID: 15705
// Function ID: 15706
// Name: useShouldDisableMessageRequestSettings
// Dependencies: [5078, 5932, 6913, 2]
// Exports: useShouldDisableMessageRequestSettings

// Module 15705 (useShouldDisableMessageRequestSettings)
import AgeVerificationUtils from "AgeVerificationUtils" /* 5078 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 6913 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useShouldDisableMessageRequestSettings.tsx");

export const useShouldDisableMessageRequestSettings = function useShouldDisableMessageRequestSettings() {
  let isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
  if (isVerifiedTeen) {
    isVerifiedTeen = obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  }
  return isVerifiedTeen;
};
