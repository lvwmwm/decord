// Module ID: 14761
// Function ID: 14762
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [6767, 5932, 5940, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 14761 (useIsMessageRequestRestrictedViewer)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5932 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5940 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6767 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export function useIsMessageRequestRestrictedViewer() {
  const obj = AgeVerificationUtils;
  const isVerifiedAdult = obj.useIsVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = !isVerifiedAdult && obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  return tmp2;
}
