// Module ID: 14279
// Function ID: 14280
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [6783, 5819, 5827, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 14279 (useIsMessageRequestRestrictedViewer)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5819 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5827 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6783 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export function useIsMessageRequestRestrictedViewer() {
  const obj = AgeVerificationUtils;
  const isVerifiedAdult = obj.useIsVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = !isVerifiedAdult && obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  return tmp2;
}
