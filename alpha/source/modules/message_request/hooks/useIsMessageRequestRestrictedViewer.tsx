// Module ID: 14145
// Function ID: 14146
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [6846, 5813, 5820, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 14145 (useIsMessageRequestRestrictedViewer)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5813 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5820 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6846 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export function useIsMessageRequestRestrictedViewer() {
  const obj = AgeVerificationUtils;
  const isVerifiedAdult = obj.useIsVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = !isVerifiedAdult && obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  return tmp2;
}
