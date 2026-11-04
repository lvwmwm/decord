// Module ID: 14231
// Function ID: 14232
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [6861, 5827, 5834, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 14231 (useIsMessageRequestRestrictedViewer)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5827 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5834 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6861 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export function useIsMessageRequestRestrictedViewer() {
  const obj = AgeVerificationUtils;
  const isVerifiedAdult = obj.useIsVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = !isVerifiedAdult && obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  return tmp2;
}
