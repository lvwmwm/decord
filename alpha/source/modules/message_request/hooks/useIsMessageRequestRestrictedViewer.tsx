// Module ID: 13964
// Function ID: 13965
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [6720, 5688, 5695, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 13964 (useIsMessageRequestRestrictedViewer)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5688 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5695 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6720 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export function useIsMessageRequestRestrictedViewer() {
  const obj = AgeVerificationUtils;
  const isVerifiedAdult = obj.useIsVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = !isVerifiedAdult && obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  return tmp2;
}
