// Module ID: 13249
// Function ID: 13250
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [6699, 5579, 5587, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 13249 (useIsMessageRequestRestrictedViewer)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5579 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5587 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6699 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export function useIsMessageRequestRestrictedViewer() {
  const obj = AgeVerificationUtils;
  const isVerifiedAdult = obj.useIsVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = !isVerifiedAdult && obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  return tmp2;
}
