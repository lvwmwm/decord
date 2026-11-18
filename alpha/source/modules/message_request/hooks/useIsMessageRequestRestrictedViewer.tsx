// Module ID: 13254
// Function ID: 13255
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [6319, 5485, 5493, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 13254 (useIsMessageRequestRestrictedViewer)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5485 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5493 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6319 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export function useIsMessageRequestRestrictedViewer() {
  const obj = AgeVerificationUtils;
  const isVerifiedAdult = obj.useIsVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = !isVerifiedAdult && obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  return tmp2;
}
