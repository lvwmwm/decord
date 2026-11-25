// Module ID: 13329
// Function ID: 13330
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [6411, 5575, 5583, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 13329 (useIsMessageRequestRestrictedViewer)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5575 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5583 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6411 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export function useIsMessageRequestRestrictedViewer() {
  const obj = AgeVerificationUtils;
  const isVerifiedAdult = obj.useIsVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = !isVerifiedAdult && obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  return tmp2;
}
