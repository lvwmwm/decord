// Module ID: 14285
// Function ID: 14286
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [6813, 5849, 5857, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 14285 (useIsMessageRequestRestrictedViewer)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5849 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5857 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6813 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export function useIsMessageRequestRestrictedViewer() {
  const obj = AgeVerificationUtils;
  const isVerifiedAdult = obj.useIsVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = !isVerifiedAdult && obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  return tmp2;
}
