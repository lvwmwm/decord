// Module ID: 14245
// Function ID: 14246
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [6864, 5829, 5837, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 14245 (useIsMessageRequestRestrictedViewer)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5829 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5837 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6864 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export function useIsMessageRequestRestrictedViewer() {
  const obj = AgeVerificationUtils;
  const isVerifiedAdult = obj.useIsVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = !isVerifiedAdult && obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  return tmp2;
}
