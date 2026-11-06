// Module ID: 14222
// Function ID: 14223
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [6806, 5847, 5855, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 14222 (useIsMessageRequestRestrictedViewer)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5847 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5855 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6806 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export function useIsMessageRequestRestrictedViewer() {
  const obj = AgeVerificationUtils;
  const isVerifiedAdult = obj.useIsVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = !isVerifiedAdult && obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  return tmp2;
}
