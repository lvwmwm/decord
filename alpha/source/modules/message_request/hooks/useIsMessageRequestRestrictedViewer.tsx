// Module ID: 14253
// Function ID: 14254
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [6781, 5817, 5825, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 14253 (useIsMessageRequestRestrictedViewer)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5817 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5825 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6781 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export function useIsMessageRequestRestrictedViewer() {
  const obj = AgeVerificationUtils;
  const isVerifiedAdult = obj.useIsVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = !isVerifiedAdult && obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  return tmp2;
}
