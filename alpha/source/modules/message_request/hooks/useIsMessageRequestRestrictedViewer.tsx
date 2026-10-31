// Module ID: 13999
// Function ID: 14000
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [6726, 5693, 5700, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 13999 (useIsMessageRequestRestrictedViewer)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5693 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5700 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6726 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export function useIsMessageRequestRestrictedViewer() {
  const obj = AgeVerificationUtils;
  const isVerifiedAdult = obj.useIsVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = !isVerifiedAdult && obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  return tmp2;
}
