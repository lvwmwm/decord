// Module ID: 13372
// Function ID: 13373
// Name: useIsMessageRequestRestrictedViewer
// Dependencies: [6794, 5674, 5682, 2]
// Exports: useIsMessageRequestRestrictedViewer

// Module 13372 (useIsMessageRequestRestrictedViewer)
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5674 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5682 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6794 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx");

export function useIsMessageRequestRestrictedViewer() {
  const obj = AgeVerificationUtils;
  const isVerifiedAdult = obj.useIsVerifiedAdult();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = !isVerifiedAdult && obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.MESSAGE_REQUEST_RESTRICTIONS);
  return tmp2;
}
